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
        traveler.isHealthy = true
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
        if (this.food < 2) {
            return this.isHealthy = false;
        } else {
            this.food = 0
        }
    }
    giveFood(traveler, numOfFoodUnits) {
        if (this.food >= 1) {
            this.food = -1;
        } else {
            traveler = numOfFoodUnits
        }
    }
}
