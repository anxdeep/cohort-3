// Create a variable for each of the following: your favorite color, your height in centimeters, and whether you like pizza. Use appropriate variable declarations (let, const, or var). Try logging it using console.log

let color = black
const height = 180
let likePizza = true

// Write a function sum that finds the sum of two numbers. 
// Side quest - Try passing in a string instead of a number and see what happens?
function sum(a,b){
	return a+b
}

console.log(sum(4,2))    // returns 6
console.log(sum(4,"hi")) // returns 4hi

// Write a function called canVote that returns true or false if the age of a user is > 18
function(age){
	return age > 18
}

console.log(canVote(42)) // returns true
console.log(canVote(4))  // returns false

// Write an if/else statement that checks if a number is even or odd. If it's even, print "The number is even." Otherwise, print "The number is odd."
function even_or_odd(num){
	if(num%2==0){
		console.log("The number is even")
	}else{
		console.log("The number is odd")
	}
}

console.log(even_or_odd(42)) // prints even

// Write a function called sum that finds the sum from 1 to a number
function sum(n){
	let sum = 0
	for(i = 1; i<n+1; i++){
		sum = sum + i
	}
	return sum
}

console.log(sum(5)) // returns 15

// Write a function that takes a user as an input and greets them with their name and age
user = {
  name: "Bob",
  age: 21
}

function greet(user){
  console.log("hi " + user.name + ", your age is " + user.age)
}

greet(user) // prints "hi Bob, your age is 21"

// Write a function that takes a user as an input and greets them with their name and age. Also tell the user if they are legal to vote or not
function greet(user){
  let gender
  let vote
  if(user.gender == "Male" || user.gender == "male"){
    gender = "Mr."
  }else if(user.gender == "Female" || user.gender == "female"){
    gender = "Mrs."
  }else{
    gender = "Other "
  }

  if(user.age >= 18){
    vote = "You are eligible to vote."
  } else {
    vote = "You are not eligible to vote"
  }
  console.log("hi " + gender+ user.name + ", your age is " + user.age + ". " + vote)
}

user = {
  name: "Bob",
  age: 42,
  gender: "male"
}

greet(user) // prints "hi Mr.Bob, your age is 42. You are eligible to vote."

// Write a function that takes an array of numbers as input, and returns a new array with only even values. Read about filter in JS

let arr = [1,2,3,4,5,6,7,8,9,10,42]

let new_arr = arr.filter(function(num){
  return num % 2 == 0
})

console.log(new_arr) // prints [ 2, 4, 6, 8, 10, 42 ]

// Write a function that takes an array of users as inputs and returns only the users who are more than 18 years old
const users = [{
    name: "Bob",
    age: 21
  }, {
    name: "Tom",
    age: 17
  }, {
    name: "Lisa",
    age: 22
  }, {
    name: "Mel",
    age: 15
  }
]

let new_users = users.filter(function(user){
  return user.age > 18
}).map(function(user){
  return user.name
})

console.log(new_users) // prints [ 'Bob', 'Lisa' ]

// Write a function that takes an array of users as inputs and returns only the users who are more than 18 years old
const users = [{
    name: "Bob",
    age: 21,
    gender: "male"
  }, {
    name: "Tom",
    age: 17,
    gender: "male"
  }, {
    name: "Lisa",
    age: 22,
    gender: "female"
  }, {
    name: "Mel",
    age: 15,
    gender: "female"
  }, {
    name: "Matt",
    age:  100,
    gender: "male"
  }
]

let new_users = users.filter(function(user){
  return user.age > 18 && user.gender == "male"
}).map(function(user){
  return user.name
})

console.log(new_users) // prints [ 'Bob', 'Matt' ]
