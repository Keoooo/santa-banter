import React, { useState, useEffect } from "react";
import { supabase } from "../../utils/supabaseClient";
import useInput from "../../utils/useInput";
import Rules from "../UI/Warnings/Rules";

import { useAuth } from "../../utils/useAuth";

const SubmitJoke = () => {
  const [formIsValid, setFormIsValid] = useState(false);
  const [isUploaded, setUploading] = useState(false);

  const { session, user } = useAuth();

  const {
    value: jokeInput,
    inputBlurChangeHandler: jokeBlur,
    isValid: jokeValid,
    hasError: jokeInputHasError,
    valueChangeHandler: jokeChangeHandler,
    reset: jokeReset,
  } = useInput((value) => value.trim() !== "");

  useEffect(() => {
    if (jokeValid) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }),
    [jokeValid];

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    setUploading(true);

    const { data, error } = await supabase
      .from("jokes")
      .insert([
        { joke: jokeInput, uuid: user.id, user: user.user_metadata.user_name },
      ]);

    setUploading(false);
    alert("New Joke Posted ");
  };

  console.log(jokeInput);

  return (
    <form
      id="joke-form"
      method="POST"
      onSubmit={formSubmitHandler}
      className="flex flex-col justify-center items-center mt-10	"
    >
      <div>
        <p className="mt-1 text-4xl font-christmasFont tracking-widest font-black  uppercase text-christmasGold sm:text-5xl sm:tracking-tight lg:text-6xl">
          Post A Joke
        </p>
      </div>
      <Rules />
      <div className="">
        <div className="">
          <label
            htmlFor="comment"
            className="block uppercase ml-5 mt-10 text-christmasGold text-xl font-christmasFont"
          >
            Add your joke
          </label>
          <div className="mt-1  ">
            <textarea
              rows={10}
              cols="40"
              onChange={jokeChangeHandler}
              name="comment"
              id="comment"
              className="shadow-sm focus:ring-santaGreen text-santaGreen bg-christmasGold focus:border-santaGreen block  sm:text-sm border-santaGreenrounded-md"
              defaultValue={""}
            />
          </div>
          <button
            type="submit"
            id="joke-form"
            className="inline-flex mt-5 items-center px-2.5 font-christmasFont tracking-widest py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-christmasGold bg-santaGreen hover:bg-christmasGold hover:text-santaGreen hover:border-santaGreen hover:border-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit Joke
          </button>
        </div>
      </div>
    </form>
  );
};

export default SubmitJoke;
