import create from "zustand";
import _ from "lodash";
import { PlayState, TrackElement } from "../../../types";
import { TimelineStore } from "./timeline.store.types";
const useTimeline = create<TimelineStore>((set) => ({
  _currentTime: 0,
  _state: PlayState.paused,
  _tracks: [],
  createTrack: (element: TrackElement): string => {
    const id = _.uniqueId();
    set(() => ({ _tracks: [{ id, items: [element] }] }));
    return id;
  },
  seek: (newTime: number) => set(() => ({ _currentTime: newTime })),
  pause: () => set(() => ({ _state: PlayState.paused })),
  play: () => set(() => ({ _state: PlayState.playing })),
}));

export default useTimeline;
