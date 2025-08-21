// #1
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(getRandomInt(1, 10));
console.log(getRandomInt(40, 50));
console.log(getRandomInt(1, 100));

// #2
function greetByName(msg, name) {
  return msg + "," + " " + name;
}
console.log(greetByName("Hi", "John"));
console.log(greetByName("Hey", "Bob"));
console.log(greetByName("Hello", "Mary"));

// #3
function sumBigIntegers(numStr1, numStr2) {
  numStr1 = BigInt(numStr1);
  numStr2 = BigInt(numStr2);
  return numStr1 + numStr2;
}
console.log(sumBigIntegers("9007199254740991", "9007199254740991"));
