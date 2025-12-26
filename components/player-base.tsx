"use client";

import { Button } from "./ui/button";
import { Slider } from "./ui/slider";

export default function PlayerBase() {
  function playPause() {}

  function nextTrack() {}
  function previousTrack() {}

  function volumeUp() {}
  function volumeDown() {}

  return (
    <div className="w-2/3 rounded-md border-2 border-gray-300 p-4 flex flex-col gap-4 my-4 mx-auto">
      <h1>Title</h1>
      <Slider />
      <div className="flex justify-evenly">
        <Button onClick={previousTrack}>Prev</Button>
        <Button onClick={playPause}>Play/Pause</Button>
        <Button onClick={nextTrack}>Next</Button>
      </div>
    </div>
  );
}
