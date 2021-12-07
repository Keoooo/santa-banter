import React from "react";
import SubmitJoke from "../../components/Forms/SubmitJoke";
import { useAuth } from "../../utils/useAuth";
import NoUser from "../../components/UI/Warnings/NoUser";
import Snow from "../../components/UI/snow/Snow";

const index = () => {
  const { session, user } = useAuth();
  return (
    <>
      <Snow />
      {user ? (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SubmitJoke />
        </div>
      ) : (
        <NoUser />
      )}
    </>
  );
};

export default index;
