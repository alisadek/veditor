import React from "react";
import useTimeline from "./store/timeline.store";
import styles from "./timeline.styles.module.scss";
import _ from "lodash";
import { EXAMPLE_TRACK_ELEMENT } from "../../shared/Examples";
type Props = {};

const Timeline = (props: Props) => {
  const {
    _tracks: tracks,
    _currentTime: currentTime,
    seek,
    addElementToTrack,
    removeElementFromTrack,
    createTrack,
  } = useTimeline();
  const handleClick = () => {
    createTrack(EXAMPLE_TRACK_ELEMENT);
  };
  const addElement = () => {
    addElementToTrack(EXAMPLE_TRACK_ELEMENT, tracks[0].id);
  };
  const deleteElement = () => {
    removeElementFromTrack(tracks[0].items[0].id, tracks[0].id);
  };
  const seekToSecond = (second: number) => {
    seek(second);
  };
  return (
    <div className={styles.timeline}>
      <div className={styles.controls}>Controls</div>
      <div className={styles.tracksArea}>Tracks Area</div>
    </div>
  );
};

export default Timeline;
