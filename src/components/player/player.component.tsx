import React from "react";
import styles from "./player.styles.module.scss";
type Props = {};

const Player = (props: Props) => {
  return (
    <div className={styles.playerContainer}>
      <div className={styles.player} />
    </div>
  );
};

export default Player;
