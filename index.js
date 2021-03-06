// Create a function theBeatlesPlay, which accepts two parameters- an array of musicians and an array of instruments.
//The body of the function should create an empty array stored in a variable. The function should also contain a for loop which loops over the array of musicians. You'll want to be careful about what value you set your counter variable to store. (Hint: Think about what the first index of an array is). The first time through the loop, the body of the loop should create a string using the first index of the musicians array and the first index of the instruments array: "John Lennon plays guitar". This string should be added to the empty array you created. The loop should make the same sentence for every member of the musicians array. The function should return the array of new strings.

 function theBeatlesPlay (musicians, instruments){
   const arr = [];

   for (let i=0, l=musicians.length; i<l; i++) {
     arr.push(`${musicians[i]} plays ${instruments[i]}`  )

   }
   return arr
 }

// Use a while loop to loop over the facts array and add "!!!" to the end of every fact. The function should return an array of strings with exclamation points.
function johnLennonFacts (facts){
  const shoutedFacts = []

  let i = 0;

  while (i < facts.length) {
    shoutedFacts.push(`${facts[i]}!!!`)
    i++
  }
    return shoutedFacts
}

// implement a do-while loop inside the function that adds "I love the Beatles!" to the empty array. Then the loop should increment the number passed in as a parameter. The condition of the loop should check to see that the parameter number is less than 15. The function should return the array with the strings "I love the Beatles!".
function iLoveTheBeatles (n){

  const arr = []

  do {
    arr.push("I love the Beatles!")
    n++
}
  while (n<15) {
    return arr
  }

}
