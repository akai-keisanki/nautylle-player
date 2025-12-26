"use client";

import { createContext, ReactNode, useContext, useMemo, useState } from "react";
import { Howl } from "howler";

interface PlayerContextProps {
  selectedFile?: string;
  setSelectedFile: (fileUrl: string) => void;
  playing: boolean;
  setPlaying: (playing: boolean) => void;
  progress: number;
  setProgress: (progress: number) => void;
  duration: number;
  setDuration: (duration: number) => void;
  howl: Howl | null;
}

const PlayerContext = createContext<PlayerContextProps | undefined>(undefined);

export const PlayerProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [selectedFile, setSelectedFile] = useState<string>();
  const [playing, setPlaying] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [duration, setDuration] = useState<number>(1);

  const hk = useMemo(() => {
    if (!selectedFile) return null;
    return new Howl({
      src: [`/api/stream/${encodeURIComponent(selectedFile)}`],
      html5: true,
      onend: () => {
        setPlaying(false);
      },
      onloaderror: () => {
        if (playing) hk?.play();
        hk?.stop();
      },
      onpause: () => {
        setPlaying(false);
        setProgress(hk?.seek() as number);
      },
      onload: () => {
        setDuration(hk?.duration());
      },
      onplay: () => {
        setPlaying(true);
      },
      onrate: () => {
        setProgress(hk?.seek() as number);
      },
    });
  }, [selectedFile]);

  return (
    <PlayerContext.Provider
      value={{
        selectedFile,
        setSelectedFile,
        playing,
        setPlaying,
        progress,
        setProgress,
        duration,
        setDuration,
        howl: hk,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
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
