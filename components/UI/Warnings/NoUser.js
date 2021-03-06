import React from "react";

const NoUser = () => {
  return (
    <div className="h-screen">
      <div className="flex flex-col place-content-center mt-32 	 bg-santaGreen rounded-lg p-5 border-2 border-christmasGold text-center ">
        <p className="mt-1 text-4xl font-christmasFont tracking-widest font-black  uppercase text-christmasGold sm:text-5xl sm:tracking-tight lg:text-6xl">
          Ho! Ho! No!
        </p>
        <p className=" text-4xl mt-6 font-christmasFont tracking-widest font-black  uppercase text-christmasGold sm:text-5xl sm:tracking-tight lg:text-6xl">
          Please Log In To Post A Joke
        </p>
      </div>
    </div>
  );
};

export default NoUser;
