import React from "react";
import { useSignOut } from "react-supabase";

const logoutBtn = () => {
  const [{ error, fetching }, signOut] = useSignOut();

  async function onClickSignOut() {
    const { error } = await signOut();
  }

  return (
    <>
      <button
        onClick={() => onClickSignOut()}
        className="inline-flex mr-3 items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
      >
        Sign Out
      </button>
    </>
  );
};

export default logoutBtn;
