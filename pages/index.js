import InfoSection from "../components/UI/Header/InfoHeader";
import JokeWall from "../components/UI/Tables/JokeWall";
import Snow from "../components/UI/snow/Snow";
import Tabs from "../components/UI/Tabs/Tabs";
import React, { useEffect, useState } from "react";
import { Provider, useRealtime } from "react-supabase";
import { useSubscription } from "react-supabase";
import { useFilter, useSelect } from "react-supabase";
import { supabase } from "../utils/supabaseClient";
import { motion, AnimatePresence } from "framer-motion";
import { useFav } from "../utils/useCounter";

export default function Home() {
  let mySubscription = null;
  const [leader, setLeader] = useState(false);
  const [jokes, setJokes] = useState([]);
  const { favTouched, setFavTouched } = useFav();

  const filter = useFilter((query) =>
    query.from("jokes").select("*").order("likes", { ascending: false })
  );

  const [{ data, error, fetching }, reexecute] = useRealtime("jokes");

  useEffect(() => {
    getSortedData();
  }, [data]);

  useEffect(async () => {
    await reexecute();
  }, [favTouched]);

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
      <AnimatePresence exitBeforeEnter>
        {!leader ? (
          <>
            <motion.div
              key="1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <JokeWall data={jokes} />
            </motion.div>
          </>
        ) : (
          <motion.div
            key="2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <JokeWall data={data} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
