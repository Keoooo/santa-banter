import React from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Tabs = ({ toggle, tabState }) => {
  return (
    <div className="flex justify-center">
      <div className="flex space-x-4 font-christmasFont  text-christmasGold tracking-widest text-xl ">
        <button
          onClick={() => toggle(false)}
          className={classNames(
            !tabState
              ? "hover:border-christmasGold p-3 rounded-full  border border-transparent "
              : "hover:border-christmasGold shadow-2xl  shadow-santaGreen  bg-santaGreen  rounded-lg border border-transparent p-3"
          )}
        >
          Jokes
        </button>
        <button
          onClick={() => toggle(true)}
          className={classNames(
            tabState
              ? "hover:border-christmasGold border rounded-full border-transparent p-3"
              : "hover:border-christmasGold shadow-2xl rounded-full shadow-christmasGold bg-santaGreen  border border-transparent p-3"
          )}
        >
          Leader Board
        </button>
      </div>
    </div>
  );
};

export default Tabs;
