/* ----------------------------------------------------------------
Habka loo isticmaalo Regular Expression
Mark aad rabtid inaad isticmaashid Javascript Regular Expression, waxa jira laba hab oo aad adeegsan karto:
---------------------------------------------------------------- */

/* ----------------------------------------------------------------
1. Regex literal:
  - Pattern oo ah habka lagu qeexayo qoraalka la raadinayo ayaa waxa la dhex gelinaysa / / dhexdooda, forward slashes. Tusaale ahaan:
---------------------------------------------------------------- */
let pattern = /hello/;

/* ----------------------------------------------------------------
 / / wa habka ku isticmaali karno Regular Expression
 /hello/ → qoraalka ku dhex jira ayaa ah pattern ama waxa la raadinayo.
---------------------------------------------------------------- */

/* ----------------------------------------------------------------
Inta badan habkan adeegso, sababtoo ah wa hab fudud oo inta badanna developers ay adeegsadaan.
    
2. RegExp constructor:
  - Waa hab kale oo la adeegsado marka la rabo in la isticmaalo Regular Expression.
  - Tusaale:
---------------------------------------------------------------- */
let _pattern = new RegExp("hello");
  
// [Xasuusin] - Habka wuxu ino saamaxaya inaynu *variables* adeegsan karno, tusaale:

let _pattern_ = "hello";
// ama 
// let _pattern_ = /hello/;
let regex = new RegExp(pattern);