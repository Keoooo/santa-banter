import React, { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { useSignIn } from "react-supabase";

const logInBtn = () => {
  const [{ error, fetching, session, user }, signIn] = useSignIn();

  async function onClickSignIn() {
    const { error, session, user } = await signIn({
      provider: "github",
    });
  }

  return (
    <>
      <button
        onClick={() => onClickSignIn()}
        className="inline-flex mr-3 items-center font-christmasFont text-l tracking-widest font-bold px-2.5 py-1.5 border border-transparent text-xs hover:text-white rounded shadow-sm text-christmasGold bg-santaRed hover:bg-santaGreen focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-santaGreen"
      >
        Sign In
        {fetching ? (
          <div className="animate-spin ml-2">
            <FaSpinner />{" "}
          </div>
        ) : null}
      </button>
    </>
  );
};

export default logInBtn;
