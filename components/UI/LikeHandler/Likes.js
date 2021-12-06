import React from "react";
import { AiTwotoneHeart } from "react-icons/ai";
import { FaPoop } from "react-icons/fa";
import { supabase } from "../../../utils/supabaseClient";
import { useFav } from "../../../utils/useCounter";

const Likes = ({ fav, row }) => {
  const { favTouched, setFavTouched } = useFav();

  console.log(favTouched);
  const incrementCount = async (row_id) => {
    const { data, error } = await supabase.rpc("increment", { row_id: row_id });
    setFavTouched(!fav);
  };
  const decrementCount = async (row_id) => {
    const { data, error } = await supabase.rpc("decrement", { row_id: row_id });
    setFavTouched(!fav);
  };

  return (
    <div className="flex justify-center align-top text-white">
      <div className="pl-0 pr-3 h-4 w-4 text-santaRed">
        <button onClick={() => incrementCount(row)}>
          <AiTwotoneHeart />
        </button>
      </div>
      <p className="ml-3 text-christmasGold">{fav}</p>
      <div className="pl-3 pr-3 h-3 w-3 text-poop ">
        <button onClick={() => decrementCount(row)}>
          <FaPoop />
        </button>
      </div>
    </div>
  );
};

export default Likes;
