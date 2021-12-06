import React from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Tabs = ({ toggle, tabState }) => {
  return (
    <div className="flex justify-center">
      <div className="flex space-x-4 font-christmasFont text-christmasGold tracking-widest text-xl ">
        <button
          onClick={() => toggle(false)}
          className={classNames(
            !tabState
              ? "hover:border-christmasGold border border-transparent p-3"
              : "hover:border-christmasGold bg-santaGreen rounded-lg border border-transparent p-3"
          )}
        >
          Jokes
        </button>
        <button
          onClick={() => toggle(true)}
          className={classNames(
            tabState
              ? "hover:border-christmasGold border border-transparent p-3"
              : "hover:border-christmasGold bg-santaGreen rounded-lg border border-transparent p-3"
          )}
        >
          Leader Board
        </button>
      </div>
    </div>
  );
};

export default Tabs;
