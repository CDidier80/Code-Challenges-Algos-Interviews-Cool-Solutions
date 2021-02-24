# Accepts a single string argument.
# Returns true or false depending upon whether or not the string is a palindrome.
# If the length of the string is 0 or 1, return true.
# NOTE: Casing and spaces are not included when considering whether or not a string is a palindrome.


def isPalindrome(string):

    if len(string) == 0 or len(string) == 1:
        return True

    no_whitespace_string = ""

    for letter in string:
        if letter != " ":
            no_whitespace_string += letter

    reversed_string = ("".join(list(reversed(no_whitespace_string))))

    palindrome =  no_whitespace_string == reversed_string

    return palindrome

print(isPalindrome("taco cat"))


