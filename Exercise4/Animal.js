class Animal {
    name;
    weight;

    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }

    setName(newName) {
        this.name = newName;
    }

    setWeight(newWeight) {
        this.weight = newWeight;
    }

    getName() {
        return this.name;
    }

    getWeight() {
        return this.weight;
    }

    toString() {
        return "The animal's name is " + this.getName() + ", and its weight is " + this.getWeight();
    }
}