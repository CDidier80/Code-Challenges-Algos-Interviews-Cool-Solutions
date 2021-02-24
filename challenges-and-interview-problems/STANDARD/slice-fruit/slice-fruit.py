# You are a Fruit Ninja, your skill is cutting fruit. All the fruit will be cut in half by your knife. For example:
# [  "apple",     "pear",     "banana"  ]  --> ["app", "le", "pe", "ar", "ban", "ana"]

# As you see, all fruits are cut in half. You should pay attention to "apple": if you cannot cut a fruit into equal parts, then the first part will has a extra character.

# You should only cut the fruit, other things should not be cut, such as the "bomb":

# [  "apple",     "pear",     "banana",   "bomb"]  -->
# ["app", "le", "pe", "ar", "ban", "ana", "bomb"]

# The valid fruit names are preloded for you as:
# fruitsName

# Complete function cutFruits that accepts argument fruits. Returns the result in accordance with the rules above.

def cut_fruits(fruits):
    sliced_fruit_array = []
    for fruit in fruits:
        if fruit not in FRUIT_NAMES:
            sliced_fruit_array.append(fruit)
        else: 
            ind = round(len(fruit) / 2 + .49)
            sliced_fruit_array.extend([fruit[:ind], fruit[ind:]])
    return sliced_fruit_array




