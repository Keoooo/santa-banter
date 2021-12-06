import React from "react";
import Likes from "../LikeHandler/Likes";
import { motion, AnimatePresence } from "framer-motion";

const JokeWall = ({ data }) => {
  return (
    <>
      <div className=" w-full bg-santaGreen shadow-2xl border-christmasGold rounded-xl mb-32	 border-4 mt-6">
        <ul role="list" className="divide-y divide-christmasGold">
          {data ? (
            <>
              {data.map((item, i) => (
                <li key={i} className="py-4">
                  <div className="flex ml-10 mr-10 space-x-3 ">
                    <div className="flex-1 space-y-1 ju ">
                      <div className="flex items-center justify-between ">
                        <div className="flex ">
                          <h3 className="text-lg  tracking-widest  text-christmasGold font-medium">
                            {`${item.user}`}
                          </h3>

                          <div className="flex"></div>
                        </div>
                        <Likes fav={item.likes} row={item.id} />

                        <div className="flex">
                          <p className="text-sm  text-christmasGold">
                            {new Date(item.created_at)
                              .toISOString()
                              .replace("-", "/")
                              .split("T")[0]
                              .replace("-", "/")}
                          </p>
                        </div>
                      </div>
                      <p className="text-lg text-christmasGold font-bold">
                        {item.joke}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </>
          ) : (
            <p>Loading</p>
          )}
        </ul>
      </div>
    </>
  );
};

export default JokeWall;
