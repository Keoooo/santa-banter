import { useEffect, useState, createContext, useContext } from "react";
import { supabase } from "../utils/supabaseClient";

// --------SET UP A CONTEXT FOR THE USER VIA SUPERBASE
export const UserContext = createContext();

export const UserContextProvider = (props) => {
  const [userLoaded, setUserLoaded] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [session, setSession] = useState(false);
  const [user, setUser] = useState(false);
  const [signInLoading, setSignInLoading] = useState(false);
  const [userDetails, setUserDetails] = useState(null);
  const [subscription, setSubscription] = useState(null);
  const [jokeData, setJokeData] = useState(null);
  console.log(jokeData);

  useEffect(() => {
    const session = supabase.auth.session();
    setSession(session);
    setUser(session?.user ?? null);
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
      }
    );
    //uploads
    return () => {
      authListener.unsubscribe();
    };
  }, []);

  const getUserDetails = () => supabase.from("users").select("*").single();

  useEffect(() => {
    if (user) {
      Promise.allSettled([getUserDetails()])
        .then((results) => {
          setUserDetails(results[0].value.data);
          setSubscription(results[1].value.data);
          setUserLoaded(true);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
          setUserLoaded(false);
        });
    }
  }, [user]);

  const value = {
    session,
    user,
    isLoading,
    userLoaded,
    userDetails,
    signInLoading,
    signIn: () => {
      setSignInLoading(true);
      supabase.auth.signIn({ provider: "github" });
      setSignInLoading(true);
    },
    signUp: (options) => supabase.auth.signUp(options),
    signOut: () => {
      setUserDetails(null);
      setSubscription(null);
      return supabase.auth.signOut();
    },
  };
  return <UserContext.Provider value={value} {...props} />;
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error(`useUser must be used within a UserContextProvider.`);
  }
  return context;
};
