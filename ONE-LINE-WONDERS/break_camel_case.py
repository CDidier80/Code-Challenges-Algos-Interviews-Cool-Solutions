
# Complete the solution so that the function will break up camel casing, using a space between words.

# example: solution("camelCasing")  ==  "camel Casing"

def solution(s):
    
    return "".join([s[i] if s[i].islower() else f" {s[i]}" for i in range(0, len(s))])

