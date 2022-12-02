import React from "react";
import styles from "./player.styles.module.scss";
type Props = {};

const Player = (props: Props) => {
  return (
    <div className={styles.playerToolbar}>
      <button>Last Track</button>
      <button>Play/Pause</button>
      <button>Next Track</button>
    </div>
  );
};

export default Player;
