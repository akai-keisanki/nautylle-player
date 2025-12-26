import { usePlayerContext } from "@/context/player-context";
import { Slider } from "../ui/slider";
import { useEffect } from "react";

export default function PlayerProgress() {
  const { progress, playing, setProgress, duration, howl } = usePlayerContext();

  useEffect(() => {
    if (!howl) return;
    setInterval(() => {
      if (howl.playing()) {
        setProgress(howl.seek() as number);
      }
    }, 500);
  }, [howl, playing]);

  function formatTime(seconds: number) {
    return (
      Math.round(seconds / 60) +
      ":" +
      Math.round(seconds % 60)
        .toString()
        .padStart(2, "0")
    );
  }

  return (
    <div>
      <div className="flex flex-row w-full items-center box-border gap-6 px-2">
        <span>{formatTime(progress)}</span>
        <Slider
          defaultValue={[0]}
          value={[progress]}
          step={1}
          max={duration}
          orientation="horizontal"
          onValueChange={(e) => {
            setProgress(e[0]);
          }}
          onValueCommit={(e) => {
            howl?.seek(e[0]);
          }}
        />
        <span>{formatTime(duration)}</span>
      </div>
    </div>
  );
}
