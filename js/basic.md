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
  
#### Global Flag
- Waxa jira wax loo yaqaano **flags**, wa xuruufo shaqo gaar ah ino qabanaya. Qaabkan ayaa loo qeexa **flags**:
`/pattern/flag`
```js 
let pattern = /Adam/g;
```

- Xuruufahaas waxa mid ah xarafka **"g"** oo micnihiisu yahay **global**.
- **"g"** shaqada u qabanayo waxa weeye in u raadiyo dhamaan qoraalada match gareeyey **pattern**. Tusaale:


> [!IMPORTANT]
> Marka adeegsan **global flag (g)** wuxu wax ka bedelaya hab dhaqanka method-ka **test**.

#### Hab-Dhaqanka Test Method haddii la adeegsan global flag (g)
Haddii la adeegsan global flag (g), method-ka **test** ma yeelanayo wax xasuus ah oo marwalba qoraalka oo  dhameystiran ayaa wax ka dhex raadinaya. **Tusaale**:
```js
let str = "Adam 123 Adam 456 Adam";
let regex = /Adam/;
console.log(regex.test(str)); // true
console.log(regex.test(str)); // true
console.log(regex.test(str)); // true
console.log(regex.test(str)); // true
```
`console.log(regex.test(str));` → marwalba waa **true**

#### Hab-Dhaqanka Test Method haddii la adeegsado global flag (g)
Haddii la adeegsado global flag (g), method-ka **test** wuxu yeelanaya xasuus ah oo marwalba raadinta wuxu kasi wadaya meeshi ugu dambeysay. **Tusaale**:
```js
let str = "Adam 123 Adam 456 Adam";
let regex = /Adam/g;
console.log(regex.test(str)); // true
console.log(regex.test(str)); // true
console.log(regex.test(str)); // true
console.log(regex.test(str)); // false
```
**Sidan ayuu u dhaqmaya**:

Qoraalka la raadinayo: **"Adam"** 

Qoraalka laga dhex raadinayo: **"Adam 123 Adam 456 Adam"**

Method-ka **test** wuxu xasuusanaya meeshii/position u dambeyey 

```md
  String     "Adam 123 Adam 456 Adam"
  Position      0   1    2   3    4
```


1. **"Adam"** waxa laga helay qoraalka **"Adam 123 Adam 456 Adam"**

```js
let str = "Adam 123 Adam 456 Adam";
let regex = /Adam/g;
console.log(regex.test(str)); // true
```
`Position: 0`

2. **"Adam"** waxa laga helay qoraalka **"123 Adam 456 Adam"**

```js
console.log(regex.test(str)); // true
```

`Position: 2`

3. **"Adam"** waxa laga helay qoraalka **"456 Adam"**

```js
console.log(regex.test(str)); // true
```

`Position: 4`

4. **"Adam"** lagama helin qoraalka **""**

```js
console.log(regex.test(str)); // false
```