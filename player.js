import { route } from "./route.js";

export default class Player {
  constructor(name, health, inventory, location) {
    this.name = name;
    this.health = health;
    this.power = 30;
    this.inventory = inventory;
    this.location = location;
    this.locationPtr = 0;
  }

  async processLocation() {
    if (!this.location.events) {
      throw new Error(
        `Somethin went wrong, check location's events: ${location}`,
      );
    }
    console.log(`${this.location.name} - ${this.location.description}`);
    let commands = this.location.events.shift().processChoice().split(",");
    for (let command of commands) {
      command = command.split(" ");
      switch (command[0]) {
        case "go":
          this.locationPtr++;
          this.location = route[this.locationPtr];
          break;
        case "stay":
          break;
        case "skip":
          this.locationPtr += 2;
          this.location = route[this.locationPtr];
          break;
        case "put":
          if (command[2] === "hp") {
            this.health += parseInt(command[1]);
          } else if (command[2] === "atk") {
            this.power += parseInt(command[1]);
          } else {
            throw new Error(`Unknow player parameter: ${command[2]}`);
          }
          break;
        default:
          throw new Error(`Unknown command: ${command[0]}`);
      }
    }
  }
}

