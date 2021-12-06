import React from "react";

const Rules = () => {
  return (
    <div className="mt-10 bg-santaGreen rounded-lg p-5 border-2 border-christmasGold">
      <ol className="uppercase text-christmasGold">
        <li>
          1. Please do not post a joke that you wouldn't tell your nan.
          <span className="text-xs">
            {" "}
            (You will end up on the naughty List)
          </span>
        </li>
        <li>2. Holiday themed jokes only please</li>
      </ol>
    </div>
  );
};

export default Rules;
