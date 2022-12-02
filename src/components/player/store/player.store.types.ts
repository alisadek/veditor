import { Player } from "../../../types";

type PlayerFunctions = {
  pause: () => void;
  play: () => void;
};

export type PlayerStore = Player & PlayerFunctions;
