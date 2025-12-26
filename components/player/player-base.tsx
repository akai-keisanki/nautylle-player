"use client";

import "@/app/player_styles.css";
import PlayerControls from "./player-controls";

export default function PlayerBase() {
  return (
    <div id="controllers">
      <div id="art">ART</div>
      <PlayerControls />
    </div>
  );
}
