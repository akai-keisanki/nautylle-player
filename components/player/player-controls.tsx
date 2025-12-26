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

export default function PlayerControls() {
  function playPause() {}

  function nextTrack() {}
  function previousTrack() {}

  function volumeUp() {}
  function volumeDown() {}

  function toggleShuffle() {}
  function toggleFollow() {}

  return (
    <>
      <div id="playlist-controllers" className="controller-group">
        <Toggle onClick={toggleShuffle}>Shuffle</Toggle>
        <Toggle onClick={toggleFollow}>Follow</Toggle>
      </div>
      <div id="play-controllers" className="controller-group">
        <Button onClick={previousTrack}>Previous</Button>
        <Button onClick={playPause}>Play</Button>
        <Button onClick={nextTrack}>Next</Button>
      </div>
      <div id="menu-controllers" className="controller-group">
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
