import create from "zustand";
import { AspectRatio, RenderDetails } from "../../../types";
import { CanvasStore } from "./canvas.store.types";

const useCanvas = create<CanvasStore>((set) => ({
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

export default useCanvas;
