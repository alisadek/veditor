import create from "zustand";
import { Player } from "../../types";

const usePlayer = create<Player>((set) => ({
  renderedElements: [],
  aspectRatio: { ratioWidth: 16, ratioHeight: 9 },
  backgroundColorHex: "#000",
}));

export default usePlayer;
