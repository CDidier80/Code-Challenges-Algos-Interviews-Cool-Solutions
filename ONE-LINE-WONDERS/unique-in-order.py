# Implement the function unique_in_order which takes as argument a sequence and returns a list of items without 
# any elements with the same value next to each other and preserving the original order of elements.

# For example:

# uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
# uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
# uniqueInOrder([1,2,2,3,3])       == [1,2,3]


def unique_in_order(iterable):

    return [iterable[x] for x in range(0, len(iterable))] if len(iterable) < 2 else [iterable[0]] + [iterable[i] for i in range(1, len(iterable)) if iterable[i] != iterable[i-1]]
