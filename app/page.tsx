import Image from "next/image";
import "./player_styles.css";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Toggle } from "@/components/ui/toggle";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import Explorer from "@/components/explorer";

export default function Home() {
  return (
    <main>
      <div id="selector">
        <Explorer />
      </div>
      <div id="controllers">
        <div id="art">ART</div>
        <div id="playlist-controllers" className="controller-group">
          <Toggle>Shuffle</Toggle>
          <Toggle>Follow</Toggle>
        </div>
        <div id="play-controllers" className="controller-group">
          <Button>Previous</Button>
          <Button>Play</Button>
          <Button>Next</Button>
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
      </div>
      <footer>Copyright (c) 2025 sudo akai-keisanki --boot -fyv</footer>
    </main>
  );
}
