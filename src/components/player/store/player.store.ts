import create from "zustand";
import { PlayState } from "../../../types";
import { PlayerStore } from "./player.store.types";

const usePlayer = create<PlayerStore>((set) => ({
  state: PlayState.paused,
  pause: () => set(() => ({ state: PlayState.paused })),
  play: () => set(() => ({ state: PlayState.playing })),
}));

export default usePlayer;
