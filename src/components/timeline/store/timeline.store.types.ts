import { Timeline, TrackElement } from "../../../types";

type TimelineFunctions = {
  seek: (newTime: number) => void;
  play: () => void;
  pause: () => void;
  createTrack: (element: TrackElement) => string;
  addElementToTrack: (element: TrackElement, trackId: string) => void;
  removeElementFromTrack: (elementId: string, trackId: string) => void;
};

export type TimelineStore = Timeline & TimelineFunctions;
