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
    _state: state,
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
      <button onClick={handleClick}>Create Track</button>
      <button onClick={addElement}>Add Element</button>
      <button onClick={deleteElement}>Delete Element</button>
      <button onClick={() => seekToSecond(0)}>Seek To 0</button>
      <button onClick={() => seekToSecond(50)}>Seek To 50</button>
      <div className={styles.flexCol}>
        {tracks.map((track) => (
          <div key={track.id}>
            {track.id}
            <p>Items:</p>
            <ul>
              {track.items.map((item) => (
                <>
                  <li>Duration: {item.duration}</li>
                  <li>Start: {item.start}</li>
                  <li>Id: {item.id}</li>
                </>
              ))}
            </ul>
          </div>
        ))}
        <p>State: {state}</p>
        <p>Current Time: {currentTime}</p>
      </div>
    </div>
  );
};

export default Timeline;
