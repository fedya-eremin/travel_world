class Player {
    constructor(name, health, inventory, location) {
        this.name = name
        this.health = health
        this.inventory = inventory
        this.location = location
    }

    async processLocation() {
        if (!this.location.events) {
            throw new Error
        }
        let command = this.location.events[0].processChoice()
        this.location.events.shift()
        console.log(command)
    }
}
