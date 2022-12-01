import { CSSProperties } from "react";

export type AspectRatio = {
  ratioWidth: number;
  ratioHeight: number;
};

export type Player = {
  renderedElements: RenderDetails[];
  aspectRatio: AspectRatio;
  backgroundColorHex: string;
};

export interface Text extends RenderDetails {
  styles: CSSProperties;
  content: string;
}
export interface Clip extends RenderDetails {}
export interface Audio {}
export interface Image extends RenderDetails {}

export type Item = Clip | Audio | Image | Text;
export type Point = {
  x: number;
  y: number;
};
export interface RenderDetails {
  topLeft: Point;
  width: number;
  height: number;
  isAspectRatioLocked: boolean;
  rotationAngle: number;
  // to be abstracted
  render: () => void;
}
export type TrackElement<T = Clip | Audio | Image | Text> = {
  id: string;
  item: T;
  isSelected: boolean;
  start: number;
  duration: number;
};

export type Track = {
  id: string;
  items: TrackElement[];
};

export enum PlayState {
  paused,
  playing,
}
export type Timeline = {
  _tracks: Track[];
  _currentTime: number;
  _state: PlayState;
};

export type MediaLibrary = any;
