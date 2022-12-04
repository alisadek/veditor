import React from "react";
import { useDrag } from "react-dnd";
import { Rnd } from "react-rnd";
import { Audio, Item, RenderDetails } from "../../../types";
import styles from "./render-element.styles.module.scss";
/**
 * Component that renders any element on the canvas
 */
type Props = {
  element: RenderDetails;
};

const RenderElement = (props: Props) => {
  const { element } = props;

  return (
    <Rnd
      id={1}
      // position={{ x: element.topLeft.x, y: element.topLeft.y }}
      lockAspectRatio={element.isAspectRatioLocked}
      // size={{ width: element.width, height: element.height }}
      resizeHandleClasses={{
        bottomLeft: styles.dragHandles,
        bottomRight: styles.dragHandles,
        topRight: styles.dragHandles,
        topLeft: styles.dragHandles,
      }}
      className={styles.renderElement}
      dragGrid={[1, 1]}
      resizeGrid={[1, 1]}
      dragHandleClassName={styles.dragHandles}
      bounds="parent"
      dragAxis="both"
    >
      <div>TEXT ELEMENT</div>
    </Rnd>
  );
};

export default RenderElement;
