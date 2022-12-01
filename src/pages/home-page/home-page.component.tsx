import React from "react";
import Player from "../../components/player/player.component";
import Timeline from "../../components/timeline/timeline.component";
import UploadFile from "../../components/upload-file/upload-file.component";
import styles from "./home-page.styles.module.scss";
type Props = {};

const HomePage = (props: Props) => {
  return (
    <div className={styles.homeLayout}>
      <div className={styles.navbar}>SideBar</div>
      <UploadFile />
      <Player />

      <Timeline />
    </div>
  );
};

export default HomePage;
