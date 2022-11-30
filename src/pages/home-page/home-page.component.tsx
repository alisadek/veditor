import React from "react";
import UploadFile from "../../components/upload-file/upload-file.component";
import styles from "./home-page.styles.module.scss";
type Props = {};

const HomePage = (props: Props) => {
  return (
    <div className={styles.homeLayout}>
      <div>SideBar</div>
      <UploadFile />
      <div>Editor</div>
    </div>
  );
};

export default HomePage;
