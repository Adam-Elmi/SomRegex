## Lua Regular Expression

- **Regular Expression** waa qoraal la qeexayo kaas inaga caawinaya raadinta qoraal kale.

- Qoraalkaas la qeexayo wuxu noqon kara xuruufo micno gaar ah u taagan oo go'aaminaya qaabka raadinta.

- **Regular Expression** qoraal ahaan waxa loo so gaabiya **Regex** ama **Regexp**.

- **Pattern** → Qeexida waxa la raadinayo. Waxa la qeexaya qoraalka la raadinayo.

   - Tusaale ahaan: 
```lua
     local qoraal = "Bishu maanta wa 20"
     local maanta = qoraal:match("%d+") -- 20
     -- pattern-ku wa "%d+", waana qaabka wax lo raadinayo
```