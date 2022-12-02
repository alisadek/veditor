import React from "react";
import Canvas from "../../components/canvas/canvas.component";
import Player from "../../components/player/player.component";
import Timeline from "../../components/timeline/timeline.component";
import UploadFile from "../../components/upload-file/upload-file.component";
import styles from "./home-page.styles.module.scss";
type Props = {};

const HomePage = (props: Props) => {
  return (
    <div className={styles.homeLayout}>
      <div className={styles.navbar}>SideBar</div>
      <div className={styles.settingsArea}>
        <UploadFile />
      </div>
      <div className={styles.editorArea}>
        <Canvas />
        <Player />
      </div>
      <Timeline />
    </div>
  );
};

export default HomePage;
