import React from "react";
import { useUser } from "../../../utils/useUser";

const logoutBtn = () => {
  const { signOut } = useUser();

  return (
    <>
      <button
        onClick={""}
        className="inline-flex mr-3 items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-santaGreen hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
      >
        Sign In
      </button>
    </>
  );
};

export default logoutBtn;
