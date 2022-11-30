import React from "react";
import usePlayer from "./player.store";
import styles from "./player.styles.module.scss";
type Props = {};

const Player = (props: Props) => {
  const { renderedElements, aspectRatio, backgroundColorHex } = usePlayer();
  return (
    <div className={styles.playerContainer}>
      <div className={styles.player} />
    </div>
  );
};

export default Player;
