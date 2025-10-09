/* 
1. Test Method:
- Method-kan marwalba laba mid uun bu so celinaya, true ama false.
- Haddii la helo waxa la raadinayo, wuxu so celinaya true, haddii kalena false*.Tusaale:
*/

let str = "Adam 123 Adam 456 Adam";
let regex = /Adam/;
console.log(regex.test(str)); // true (Waxa la helay wixii la raadinayey)

// "Adam" → ayaa laga dhex raadiyey qoraalka ah "Adam 123 Adam 456 Adam" 
regex = /Ahmed/;
console.log(regex.test(str)); // false (Lama helin wixii la raadinayey)

// "Ahmed" → ayaa laga dhex raadiyey qoraalka ah "Adam 123 Adam 456 Adam"Global 

/*
Flag:
- Waxa jira wax loo yaqaano flags, wa xuruufo shaqo gaar ah ino qabanaya. Qaabkan ayaa loo qeexa flags:`/pattern/flag`
*/

let pattern = /Adam/g;

/*
- Xuruufahaas waxa mid ah xarafka "g" oo micnihiisu yahay global.
- "g" shaqada u qabanayo waxa weeye in u raadiyo dhamaan qoraalada match gareeyey pattern.

Marka adeegsan global flag (g) wuxu wax ka bedelaya hab dhaqanka method-ka test.
*/
/*
 Hab-Dhaqanka Test Method haddii la adeegsan global flag (g):
 - Haddii la adeegsan global flag (g), method-ka test ma yeelanayo wax xasuus ah oo marwalba qoraalka oo  dhameystiran ayaa wax ka dhex raadinaya. Tusaale:
*/

regex = /Adam/;
console.log(regex.test(str)); // true
console.log(regex.test(str)); // true
console.log(regex.test(str)); // true
console.log(regex.test(str)); // true

// console.log(regex.test(str)); → marwalba waa true
/*
Hab-Dhaqanka Test Method haddii la adeegsado global flag (g):
- Haddii la adeegsado global flag (g), method-ka test wuxu yeelanaya xasuus ah oo marwalba raadinta wuxu kasi wadaya meeshi ugu dambeysay.
Tusaale:
*/

regex = /Adam/g;
console.log(regex.test(str)); // true
console.log(regex.test(str)); // true
console.log(regex.test(str)); // true
console.log(regex.test(str)); // false

/*
Sidan ayuu u dhaqmaya:Qoraalka la raadinayo: 

- "Adam" Qoraalka laga dhex raadinayo: "Adam 123 Adam 456 Adam"

- Method-ka test wuxu xasuusanaya meeshii/position u dambeyey: 
String     "Adam 123 Adam 456 Adam"
Position      0   1    2   3    4
*/

/*
[Position: 0]:
1. "Adam" waxa laga helay qoraalka "Adam 123 Adam 456 Adam"
*/

console.log(regex.test(str)); // true

/*
[Position: 2]:
2. "Adam" waxa laga helay qoraalka "123 Adam 456 Adam"
*/

console.log(regex.test(str)); // true

/*
[Position: 4]
3. "Adam" waxa laga helay qoraalka "456 Adam"
*/

console.log(regex.test(str)); // true

/*
4. "Adam" lagama helin qoraalka ""
*/

console.log(regex.test(str)); // false