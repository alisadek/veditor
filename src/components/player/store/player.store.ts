import create from "zustand";
import { AspectRatio, RenderDetails } from "../../../types";
import { PlayerStore } from "./player.store.types";

const usePlayer = create<PlayerStore>((set) => ({
  renderedElements: [],
  aspectRatio: { ratioWidth: 16, ratioHeight: 9 },
  backgroundColorHex: "#000",
  addToElements: (element: RenderDetails) =>
    set((state) => ({
      renderedElements: [...state.renderedElements, element],
    })),
  setAspectRatio: (aspectRatio: AspectRatio) => set(() => ({ aspectRatio })),
  setBackgroundColor: (backgroundColorHex: string) =>
    set(() => ({ backgroundColorHex })),
}));

export default usePlayer;
