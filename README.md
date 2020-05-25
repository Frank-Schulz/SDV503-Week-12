# SDV503-Week-12

## Hash Tables
Hash tables are similar to objects in that both use key value pairs.
However, their usage is more akin to that of an array; a much faster 
array.
The great thing about Hash Tables is that they are fast, 
generally O(1), because the look up has direct access. It's the 
implementation of the hash function that really affects the speed of 
your Hash Table.
Conversely the use of a Hash Table is really only worth it when you 
have many items to use it with. If you only have a couple of values 
then a normal array is more effective.
And the problem with using many items is that it increases the chance 
for Hash Table Collisions, where multiple values get assigned to the same hash.

### Pseudocode


### Core Hash Table Functionality
<img src="https://gblobscdn.gitbook.com/assets%2F-M0tzdQoYXoPhCiqfqxs%2F-M7Y_5joCQkAp5eT8QA3%2F-M7YbWY9D-3kXbAetNJ5%2FScreen%20Shot%202020-05-18%20at%205.10.45%20AM.png" width=75% />

 * It returns null if we try to find a key which does not exist.
 * It is slower than dictionary because it requires boxing and unboxing.
 * All the members in a Hashtable are thread safe,
 * Hashtable is not a generic type,
(Antariksh Verma, 2013)

## Dictionaries

Although JavaScript has no native "Dictionary" implementation, the 
JavaScript "object" is capable of providing this functionality.
(Chris Pietschmann, 2015)
The JavaScript object has key, value pair implementation, making it 
usable as a dictionary since this allows you to look up values stored 
under a key.
In essence the functionality of this is very similar to the Hash 
Table but differs in it's implementation.

### Pseudocode:


(I was unable to find a diagram for a dictionary)

 * It returns error if we try to find a key which does not exist.
 * It is faster than a Hashtable because there is no boxing and unboxing.
 * Only public static members are thread safe.
 * Dictionary is a generic type which means we can use it with any data type.
(Antariksh Verma, 2013)

## References

Antariksh Verma. (2013, June 4). Hashtable vs. Dictionary. https://www.codeproject.com/Tips/602537/Hashtable-vs-Dictionary

Chris Pietschmann. (2015, September 5). JavaScript Basics: How to create a Dictionary with Key/Value pairs | Chris Pietschmann. https://pietschsoft.com/post/2015/09/05/javascript-basics-how-to-create-a-dictionary-with-keyvalue-pairs