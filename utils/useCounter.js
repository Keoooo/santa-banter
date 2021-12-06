import { useEffect, useState, createContext, useContext } from "react";

export const FavContext = createContext();

export function FavProvider({ children }) {
  const [favTouched, setFavTouched] = useState();

  return (
    <FavContext.Provider value={{ favTouched, setFavTouched }}>
      {children}
    </FavContext.Provider>
  );
}

export function useFav() {
  const context = useContext(FavContext);
  if (context === undefined)
    throw Error("useFav must be used within FavProvider");
  return context;
}
