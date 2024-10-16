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
      command = command.split("&");
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
        case "sleep":
          await new Promise(r => setTimeout(r, parseInt(command[1])));
          break;
        case "put":
          if (command[2] === "hp") {
            this.health += parseInt(command[1]);
            this.inventory.push({name: command[3], atk: command[1]})
            console.log(`Вы выпили ${command[3]}. ${command[1]} к здоровью. Ваше здоровье - ${this.health}`)
          } else if (command[2] === "atk") {
            this.power += parseInt(command[1]);
            this.inventory.push({name: command[3], hp: command[1]})
            console.log(`Вы взяли ${command[3]}. ${command[1]} к атаке. Ваша атака - ${this.power}`)
          } else {
            throw new Error(`Unknow player parameter: ${command[2]}`);
          }
          break;
        case "save":
          this.inventory.push({name: command[1]})
          console.log(`Вы взяли ${command[1]}. Возможно, это вам пригодится...`)
          break;
        case "fight":
          let enemyAtk = parseInt(command[1])
          let enemyHp = parseInt(command[2])
          if (this.health < enemyHp || this.health === enemyHp && this.power <= enemyAtk) {
            console.log(`Вам не удалось победить ${command[3]}`)
            process.exit(1)
          } else {
            console.log(`Вы победили врага ${command[3]}`)
          }
          break;
        case "check":
          if (this.inventory.filter((e) => e.name === command[1]).length >= 1) {
              console.log(command[2])
          } else {
              console.log(command[3])
          }
          break;
        case "exit":
          process.exit(0);
          break;
        default:
          throw new Error(`Unknown command: ${command[0]}`);
      }
    }
  }
}

