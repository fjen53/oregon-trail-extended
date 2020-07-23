class Wagon {
    constructor(capacity) {
        this.capacity = capacity
        this.passengers = []
    }
    getAvailableSeatCount() {
        return this.capacity - this.passengers.length
    }

    join(traveler) {
        if (this.passengers.length < this.capacity) {
            this.passengers[this.passengers.length] = traveler;
        }
    }

    shouldQuarantine() {
        let index = 0
        for (index = 0; index < this.passengers.length; index++) {
            if (!this.passengers[index].isHealthy) {
                return false;
            }
        }
        return true;
    }

    totalFood() {
        let totalFood = 0
        let index = 0
        for (index = 0; index < this.passengers.length; index++) {
            totalFood += this.passengers[index].food
        }
        return totalFood
    }
}