const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLclearoggedIn: false,
      points: 40
    }
  }

//   Create an empty object called dog
// Print the the dog object on the console
// Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
// Get name, legs, color, age and bark value from the dog object
// Set new properties the dog object: breed, getDogInfo

// Exercise 1

let dog = {};

console.log(dog);

dog.name = 'Shurry',
dog.legs = 4;
dog.color = 'white and black',
dog.age = 100;
dog.bark = function() {
    console.log('Woof Woof ...')
}

let fetchDogDetails = () => {
    const dogLeg = dog.legs;
    const dogColor = dog.color;
    const dogAge = dog.age;
    const dogBarkType = dog.bark();
    console.log(dogLeg, dogColor, dogAge, dogBarkType);
}

fetchDogDetails();

dog.getDogInfo = () => {
    console.log(`The dog name is ${dog.name} and has a skin color of ${dog.color} with ${dog.legs} legs and it bark like ${dog.bark}`)
}

dog.breed = 'bone';
