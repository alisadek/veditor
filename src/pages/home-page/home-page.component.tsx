import React from "react";
import Player from "../../components/player/player.component";
import UploadFile from "../../components/upload-file/upload-file.component";
import styles from "./home-page.styles.module.scss";
type Props = {};

const HomePage = (props: Props) => {
  return (
    <div className={styles.homeLayout}>
      <div className={styles.navbar}>SideBar</div>
      <UploadFile />
      <Player />
      <div className={styles.timeline}>Timeline</div>
    </div>
  );
};

export default HomePage;
