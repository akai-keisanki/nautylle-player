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
import PlayerBase from "@/components/player/player-base";

export default function Home() {
  return (
    <main>
      <div id="selector">
        <Explorer />
      </div>
      <PlayerBase />
      <footer>Copyright (c) 2025 sudo akai-keisanki --boot -fyv</footer>
    </main>
  );
}
