import _ from "lodash";
import { RenderDetails, TrackElement } from "../types";

export const EXAMPLE_TRACK_ELEMENT: TrackElement = {
  duration: 20,
  start: 0,
  item: {
    content: "Ali Sadek",
    height: 100,
    isAspectRatioLocked: true,
    rotationAngle: 0,
    styles: { color: "#fff" },
    width: 300,
    topLeft: 0,
  },
  isSelected: false,
  id: _.uniqueId(),
};

export const EXAMPLE_RENDER_ELEMENT: RenderDetails = {
  height: 100,
  isAspectRatioLocked: true,
  rotationAngle: 0,
  width: 300,
  topLeft: { x: 0, y: 0 },
};
