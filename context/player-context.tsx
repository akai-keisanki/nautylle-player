"use client";

import { createContext, ReactNode, useContext } from "react";

interface PlayerContextProps {}

const PlayerContext = createContext<PlayerContextProps | undefined>(undefined);

export const PlayerProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return <PlayerContext.Provider value={{}}>{children}</PlayerContext.Provider>;
};

export const usePlayerContext = () => {
  const context = useContext(PlayerContext);
  if (!context) {
    throw new Error(
      "usePlayerContext must be used within a PlayerContextProvider",
    );
  }
  return context;
};
