class Traveler {
    constructor(name) {
        this.name = name
        this.food = 1
        this.isHealthy = true
    }
    hunt() {
        return this.food += 2

    }
    eat() {
        if (this.food === 0) {
            return this.isHealthy = false;
        } else {
            this.food -= 1
        }

    }
}
class Doctor extends Traveler {
    constructor(name) {
        super(name)
    }
    heal(traveler) {
        this.isHealthy = true
    }
}
class Hunter extends Traveler {
    constructor(name) {
        super(name)
        this.food = 2
    }
    hunt() {

        return this.food += 5

    }
    eat() {
        if (this.food <= 1) {
            return this.isHealthy = false;
        } else {
            this.food -= 2
        }
    }
    giveFood(traveler, numOfFoodUnits) {
        if (this.food > this.food.length) {
            this.food[this.food.length] = numOfFoodUnits;
        } else {
            traveler = numOfFoodUnits
        }
    }
}
