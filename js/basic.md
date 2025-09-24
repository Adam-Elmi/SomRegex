# Javascript Regular Expression

- **Regular Expression** waa qoraal la qeexayo kaas inaga caawinaya raadinta qoraal kale.

- Qoraalkaas la qeexayo wuxu noqon kara xuruufo micno gaar ah u taagan oo go'aaminaya qaabka raadinta.

- **Regular Expression** qoraal ahaan waxa loo so gaabiya **Regex** ama **Regexp**.

- **Pattern** → Qeexida waxa la raadinayo. Waxa la qeexaya qoraalka la raadinayo.


## Habka loo isticmaalo Regular Expression
Mark aad rabtid inaad isticmaashid **Javascript Regular Expression**, waxa jira laba hab oo aad adeegsan karto:

1. **Regex literal**:
  - **Pattern** oo ah habka lagu qeexayo qoraalka la raadinayo ayaa waxa la dhex gelinaysa **/ /** dhexdooda, forward slashes. Tusaale ahaan:
     ```js
      let pattern = /hello/;
    ```
    - **/ /** wa habka ku isticmaali karno **Regular Expression**
    - **/hello/** → qoraalka ku dhex jira ayaa ah **pattern** ama waxa la raadinayo.

> [!TIP]
> Inta badan habkan adeegso, sababtoo ah wa hab fudud oo inta badanna developers ay adeegsadaan.
    
2. **RegExp constructor**:
  - Waa hab kale oo la adeegsado marka la rabo in la isticmaalo **Regular Expression**.
  - Tusaale:
  ```js
  let pattern = new RegExp("hello");
  ```
  
  > [!NOTE]
> Habka wuxu ino saamaxaya inaynu ***variables*** adeegsan karno, tusaale:
```js
let pattern = "hello";
// ama 
// let pattern = /hello/;
let regex = new RegExp(pattern);
```

## Methods la adeegsado marka la isticmaalayo **Regular Expression**
Si methods u isticmaalno waxaan u baahanahay laba waxyaabo:
1. **Pattern**: Inaynu qeexno waxa la raadinayo.
2. **String**: Qoraalka laga dhex raadinayo.

**Tusaale**:
```js
let str = "Hello World";
let pattern = /Hello/;
console.log(pattern.test(str)); // true
```
> [!NOTE]
> Waxa jira methods u gaar ah **Regular Expression** iyo methods u gaar ah **String**

#### Methods u gaarka ah Regex (Regex Methods)
1. **Test Method**:
  - Method-kan marwalba laba mid uun bu so celinaya, **true** ama **false**.
  - Haddii la helo waxa la raadinayo, wuxu so celinaya **true**, haddii kalena **false*.
  **Tusaale:**
  ```js
  let str = "Adam 123 Adam 456 Adam";
  let regex = /Adam/;
  console.log(regex.test(str)); // true (Waxa la helay wixii la raadinayey)
  ```
  
  **"Adam"** → ayaa laga dhex raadiyey qoraalka ah **"Adam 123 Adam 456 Adam"**
    
  ```js
  let str = "Adam 123 Adam 456 Adam";
  let regex = /Ahmed/;
  console.log(regex.test(str)); // false (Lama helin wixii la raadinayey)
  ```
  
  **"Ahmed"** → ayaa laga dhex raadiyey qoraalka ah **"Adam 123 Adam 456 Adam"**

