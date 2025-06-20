local text = "Adam loves 3 programming languages, lua is one of them.To know the other 2 languages, contact Adam at adamcade123@gmail.com"

-- Pattern "."
print(string.match(text, ".")) -- A
-- Pattern "%a"
print(string.match(text, "%a")) -- A
-- Pattern "%d"
print(string.match(text, "%d")) -- 3
-- Pattern "%s"
print(string.match(text, "%s")) -- " "
-- Pattern "%w"
print(string.match(text, "%w")) -- A
-- Pattern "%p"
print(string.match(text, "%p")) -- ","