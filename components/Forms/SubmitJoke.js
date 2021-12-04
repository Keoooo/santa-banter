import React, { useState, useEffect } from "react";
import { supabase } from "../../utils/supabaseClient";
import useInput from "../../utils/useInput";

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
      className="flex flex-col justify-center items-center	"
    >
      <div>
        <h1 className="uppercase text-white">Post A Joke </h1>
      </div>
      <div>
        <label
          htmlFor="comment"
          className="block uppercase text-lg mt-10 font-medium text-white"
        >
          Add your joke
        </label>
        <div className="mt-1 ">
          <textarea
            rows={4}
            onChange={jokeChangeHandler}
            name="comment"
            id="comment"
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-72 sm:text-sm border-gray-300 rounded-md"
            defaultValue={""}
          />
        </div>
        <button
          type="submit"
          id="joke-form"
          className="inline-flex mt-5 items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit Joke
        </button>
      </div>
    </form>
  );
};

export default SubmitJoke;
