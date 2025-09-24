let str = "Adam 123 Adam 456 Adam";
let regex = /Adam/;
console.log(regex.test(str)); // true (Waxa la helay wixii la raadinayey)

let regex_2 = /Ahmed/;
console.log(regex_2.test(str)); // false (Lama helin wixii la raadinayey)