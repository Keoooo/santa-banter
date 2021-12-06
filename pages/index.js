import InfoSection from "../components/UI/Header/InfoHeader";
import JokeWall from "../components/UI/Tables/JokeWall";
import Snow from "../components/UI/snow/Snow";
import Tabs from "../components/UI/Tabs/Tabs";
import React, { useEffect, useState } from "react";
import { Provider, useRealtime } from "react-supabase";
import { useSubscription } from "react-supabase";
import { useFilter, useSelect } from "react-supabase";
import { supabase } from "../utils/supabaseClient";

export default function Home() {
  let mySubscription = null;
  const [leader, setLeader] = useState(false);
  const [jokes, setJokes] = useState([]);

  const filter = useFilter((query) =>
    query.from("jokes").select("*").order("likes", { ascending: false })
  );

  const [{ data, error, fetching }, refetch] = useRealtime("jokes");

  useEffect(() => {
    getSortedData();
  }, [data]);

  const getSortedData = async () => {
    const { data, error } = await supabase
      .from("jokes")
      .select()
      .order("likes", { ascending: false });
    console.log(data);
    setJokes(data);
  };

  const toggle = (val) => {
    setLeader(!val);
  };

  console.log(leader);
  return (
    <div className="relative">
      <Snow />
      <InfoSection />
      <Tabs toggle={toggle} tabState={leader} />
      {!leader ? <JokeWall data={jokes} /> : <JokeWall data={data} />}
    </div>
  );
}
