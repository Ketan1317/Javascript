class Human {
    name = "Ketan Goyal";  // Public property
    #weight = 98;          // Private property

    // Getter for private property
    get weight() {
        return this.#weight;
    }

    // Setter for private property
    set weight(newWeight) {
        this.#weight = newWeight;
        
    }
}

// Create an instance of the class
const person = new Human();

// Using the setter to update the weight
person.weight = 89;  // This invokes the setter
console.log(person.weight);  // Output: 89 (via the getter)
// getter and setters don't use () brackets
