import { AspectRatio, Canvas, RenderDetails } from "../../../types";

type CanvasFunctions = {
  addToElements: (element: RenderDetails) => void;
  setAspectRatio: (aspectRatio: AspectRatio) => void;
  setBackgroundColor: (backgroundColorHex: string) => void;
};
export type CanvasStore = Canvas & CanvasFunctions;
