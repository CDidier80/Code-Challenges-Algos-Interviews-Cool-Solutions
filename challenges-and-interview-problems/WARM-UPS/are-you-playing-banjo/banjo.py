# Create a function which answers the question "Are you playing banjo?".
# If your name starts with the letter "R" or lower case "r", you are playing banjo!

# The function takes a name as its only argument, and returns one of the following strings:

# name + " plays banjo" 
# name + " does not play banjo"


# solution 1

def areYouPlayingBanjo(name):
    return f"{name}{' plays' if name[0].lower() == 'r' else ' does not play'} banjo"



# solution 2

def areYouPlayingBanjo2(name):
    if name[0] == "r" or name[0] == "R":
        return f"{name} plays banjo"
    else: 
        return f"{name} does not play banjo"