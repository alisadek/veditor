import create from "zustand";
import _ from "lodash";
import { PlayState, TrackElement } from "../../../types";
import { TimelineStore } from "./timeline.store.types";
const useTimeline = create<TimelineStore>((set) => ({
  _currentTime: 0,
  _tracks: [],
  createTrack: (element: TrackElement): string => {
    const id = _.uniqueId();
    set(({ _tracks }) => ({ _tracks: [..._tracks, { id, items: [element] }] }));
    return id;
  },
  seek: (newTime: number) => set(() => ({ _currentTime: newTime })),
  addElementToTrack: (element: TrackElement, trackId: string) =>
    set(({ _tracks }) => ({
      _tracks: _tracks.map((track) => {
        if (track.id === trackId) {
          return { ...track, items: [...track.items, element] };
        }
        return track;
      }),
    })),
  removeElementFromTrack: (elementId: string, trackId: string) => {
    set(({ _tracks }) => ({
      _tracks: _tracks.map((track) => {
        if (track.id === trackId) {
          return {
            ...track,
            items: track.items.filter((item) => item.id !== elementId),
          };
        }
        return track;
      }),
    }));
  },
}));

export default useTimeline;
