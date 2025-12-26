import { Button } from "../ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Toggle } from "../ui/toggle";
import { Switch } from "../ui/switch";
import { Label } from "../ui/label";
import { usePlayerContext } from "@/context/player-context";
import { ArrowLeft, ArrowRight, Pause, Play, Shuffle } from "lucide-react";

import PlayerProgress from "./player-progress";

export default function PlayerControls() {
  const { playing, setPlaying, selectedFile, howl, setProgress } =
    usePlayerContext();

  function playPause() {
    setPlaying(!playing);
    howl?.playing() ? howl.pause() : howl.play();
  }

  function nextTrack() {}
  function previousTrack() {}

  function volumeUp() {}
  function volumeDown() {}

  function toggleShuffle() {}
  function toggleFollow() {}

  return (
    <>
      <div id="playlist-controllers">
        <Toggle disabled={!selectedFile} onClick={toggleShuffle}>
          <Shuffle />
        </Toggle>
        <Toggle disabled={!selectedFile} onClick={toggleFollow}>
          Follow
        </Toggle>
      </div>
      <div id="play-controllers">
        <PlayerProgress />
        <div id="play-controller-buttons">
          <Button disabled={!selectedFile} onClick={previousTrack}>
            <ArrowLeft />
          </Button>
          <Button disabled={!selectedFile} onClick={playPause}>
            {playing ? <Pause /> : <Play />}
          </Button>
          <Button disabled={!selectedFile} onClick={nextTrack}>
            <ArrowRight />
          </Button>
        </div>
      </div>
      <div id="menu-controllers">
        <Drawer>
          <DrawerTrigger asChild>
            <Button>Options...</Button>
          </DrawerTrigger>
          <DrawerContent>
            <div id="options-drawer">
              <DrawerHeader>
                <DrawerTitle>Options</DrawerTitle>
              </DrawerHeader>
              <div className="swg">
                <Switch id="effects" />
                <Label htmlFor="effects">Effects</Label>
              </div>
              <div className="swg">
                <Switch id="opt2" />
                <Label htmlFor="opt2">opt2</Label>
              </div>
              <DrawerFooter>
                <DrawerClose asChild>
                  <Button>Close</Button>
                </DrawerClose>
              </DrawerFooter>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
}
