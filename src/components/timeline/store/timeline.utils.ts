import _ from "lodash";
import { Timeline, TrackElement } from "../../../types";

const addElementToTrack = (id: string, element: TrackElement) => ({
  _tracks: [{ id, items: [element] }],
});
export const createTrack = (
  set: (
    partial:
      | Timeline
      | Partial<Timeline>
      | ((state: Timeline) => Timeline | Partial<Timeline>),
    replace?: boolean | undefined
  ) => void,
  element: TrackElement
): string => {
  const id = _.uniqueId();
  set(addElementToTrack(id, element));
  return id;
};
