import { route } from "./route.js";
import Player from "./player.js";

const player = new Player("test", 100, [], route[0]);

while (player.location !== null) {
  await player.processLocation();
}
