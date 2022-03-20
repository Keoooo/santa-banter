import React from "react";

const InfoHeader = () => {
  return (
    <>
      <div className="bg-santaRed  rounded-lg">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="   text-center">
            <div className="flex justify-center">
              {" "}
              <img src="/santa.png" className="h-36 w-36" />
            </div>

            <p className="mt-3 text-6xl font-christmasFont tracking-widest font-black  uppercase text-white sm:text-5xl sm:tracking-tight lg:text-8xl">
              Santa Banter
            </p>
            <p className="max-w-l font-christmasFont font-black tracking-widest capitalize mt-5 mx-auto text-3xl  text-white">
              A Place to Share your christmas themed jokes
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoHeader;
