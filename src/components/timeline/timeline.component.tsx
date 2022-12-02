import React from "react";
import useTimeline from "./store/timeline.store";
import styles from "./timeline.styles.module.scss";
import _ from "lodash";
type Props = {};

const Timeline = (props: Props) => {
  const EXAMPLE_ELEMENT = {
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
      render: (() => null)(),
    },
    isSelected: false,
    id: _.uniqueId(),
  };
  const {
    _tracks: tracks,
    _currentTime: currentTime,
    seek,
    addElementToTrack,
    removeElementFromTrack,
    createTrack,
  } = useTimeline();
  const handleClick = () => {
    createTrack(EXAMPLE_ELEMENT);
  };
  const addElement = () => {
    addElementToTrack(EXAMPLE_ELEMENT, tracks[0].id);
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
