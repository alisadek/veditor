import create from "zustand";
import { PlayState, RenderDetails, Timeline, TrackElement } from "../../types";
// import _ from "lodash"
const useTimeline = create<Timeline>((set) => ({
  _currentTime: 0,
  _state: PlayState.paused,
  _tracks: [],
  addElement: (element: TrackElement, trackId?: string) => {},
  // createTrack: (element: TrackElement): string => {
  //   set((state) => {
  //     state._tracks.push({id: });
  //   });
  // },
}));

export default useTimeline;
