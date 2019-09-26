class GuessingGame {
    constructor() {
        this.min = null;
        this.max = null;
        this.res = null;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.res = Math.round(this.min + (this.max - this.min)/2);
        return this.res
    }

    lower() {
        this.max = this.res;
    }

    greater() {
        this.min = this.res
    }
}

module.exports = GuessingGame;
