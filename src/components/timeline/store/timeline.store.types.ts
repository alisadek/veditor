import { Timeline, TrackElement } from "../../../types";

type TimelineFunctions = {
  seek: (newTime: number) => void;
  play: () => void;
  pause: () => void;
  createTrack: (element: TrackElement) => string;
};

export type TimelineStore = Timeline & TimelineFunctions;
