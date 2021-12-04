import React, { useEffect, useState } from "react";
import { supabase } from "../../../utils/supabaseClient";
import { Provider, useRealtime } from "react-supabase";
import { useSubscription } from "react-supabase";

const JokeWall = () => {
  const [newPost, SetNewPost] = useState(false);

  const [{ data, error, fetching }, reexecute] = useRealtime("jokes");

  useSubscription((payload) => {
    console.log("Change received!", payload);
    if (payload) {
      SetNewPost(true);
    } else {
      null;
    }
  });

  console.log(newPost);

  return (
    <>
      <div className="bg-santaGreen rounded-lg mt-10">
        <ul role="list" className="divide-y divide-gray-200">
          {data ? (
            <>
              {data.map((item, i) => (
                <li key={i} className="py-4">
                  <div className="flex ml-10 mr-10 space-x-3">
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm font-medium">{item.id}</h3>
                        <p className="text-sm text-gray-500">{item.joke}</p>
                      </div>
                      <p className="text-sm text-gray-500">{item.joke}</p>
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
