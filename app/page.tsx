import "./player_styles.css";

import Explorer from "@/components/explorer";
import PlayerBase from "@/components/player/player-base";

export default function Home() {
  return (
    <main>
      <div id="selector">
        <Explorer />
      </div>
      <PlayerBase />
      <footer className="text-center my-2">
        Copyright (c) 2025 sudo akai-keisanki --boot -fyv
      </footer>
    </main>
  );
}
