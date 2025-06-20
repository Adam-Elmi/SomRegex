## Lua Regular Expression

- **Regular Expression** waa qoraal khaas ah oo u sheegaya computer-ka waxa uu ka raadinayo qoraal kale (sida tiro, eray, calaamad, iwm).

- **Regex** oo ah  **Regular Expression** oo qoraal ahaan laso gaabiyey.

- **Pattern** → Qaabka raadinta
   - Tusaale ahaan: 
```lua
     local qoraal = "Maanta bishu wa 20"
     local maanta = qoraal:match("%d+") -- 20
     -- pattern-ku wa "%d+", waana qaabka wax lo raadinayo
```

| Pattern (Qaabka/Xeerka raadinta) | Macnaha | Tusaale
----------|---------|--------
**.** | Waafaqaya xaraf ama calaamad kasta laga reebo newline **(\n)** | xarafka **"A"** wuxu waafaqey xeerka raadinta ee ah **"."**
**%a** | Waafaqaya xaraf kasta **(A-Z, a-z)** | xarafka **"A"** wuxu waafaqey xeerka raadinta ee ah **"%a"**
**%d** | Waafaqaya tiro kasta **(0-9)** | Tirada **"3"** waxay waafaqeysa xeerka raadinta ee ah **"%d"**
**%s** | Waafaqaya **" "** iyo **"\n"** | **" "** ama **"\n"** waxay waafaqeysa xeerka raadinta ee ah **"%s"**
**%w** | Waafaqaya xaraf ama tiro kasta **(A-Z, a-z, 0-9)** | **"a3"** waxay waafaqaysa xeerka raadinta ee ah **"%w"**
**%p** | Waafaqaya calaamad kasta | **"#"** wuxu waafaqaya xeerka raadinta ee ah **"%p"**


