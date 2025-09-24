let str = "Adam 123 Adam 456 Adam";
let regex = /Adam/;
console.log(regex.test(str)); // true (Waxa la helay wixii la raadinayey)

let regex_2 = /Ahmed/;
console.log(regex_2.test(str)); // false (Lama helin wixii la raadinayey)

// Without global flag
console.log(regex.test(str)); // true
console.log(regex.test(str)); // true
console.log(regex.test(str)); // true
console.log(regex.test(str)); // true

// With global flag
let regex_3 = /Adam/g;
console.log(regex_3.test(str)); // true
console.log(regex_3.test(str)); // true
console.log(regex_3.test(str)); // true
console.log(regex_3.test(str)); // false