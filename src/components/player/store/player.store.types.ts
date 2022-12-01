import { AspectRatio, Player, RenderDetails } from "../../../types";

type PlayerFunctions = {
  addToElements: (element: RenderDetails) => void;
  setAspectRatio: (aspectRatio: AspectRatio) => void;
  setBackgroundColor: (backgroundColorHex: string) => void;
};
export type PlayerStore = Player & PlayerFunctions;
