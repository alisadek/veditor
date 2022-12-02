import React from "react";
import styles from "./canvas.styles.module.scss";
import useCanvas from "./store/canvas.store";
type Props = {};

const Canvas = (props: Props) => {
  const {
    renderedElements,
    addToElements,
    aspectRatio,
    backgroundColorHex,
    setAspectRatio,
    setBackgroundColor,
  } = useCanvas();
  return (
    <div className={styles.canvasContainer}>
      <div className={styles.canvas}>
        {renderedElements.map((el) => (
          <div
            style={{
              position: "absolute",
              height: el.height,
              top: el.topLeft.y,
              left: el.topLeft.x,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Canvas;
