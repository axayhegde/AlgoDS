# Merge Sort

Merge Sort is an efficient, general-purpose, comparison-based sorting algorithm. It is a divide and conqure algorithm.

It works as follows
- Divide the unsorted list into sublists each containing one element.
- Repeatedly merge sublists to produce new sorted sublists until there is only 1 list remaining.

#### Performance:

- Merge sort has a worst-case complexity of О(n log n)
- Space Complexity : О(n) total with O(n) auxiliary, O(1) auxiliary with linked lists
- Merge sort is more efficient than quicksort for some types of lists if the data to be sorted can only be efficiently accessed sequentially, and is thus popular in languages such as Lisp, where sequentially accessed data structures are very common. Unlike some (efficient) implementations of quicksort, merge sort is a stable sort.
- Merge sort's most common implementation does not sort in place; therefore, the memory size of the input must be allocated for the sorted output to be stored in (see below for versions that need only n/2 extra spaces).

![](https://upload.wikimedia.org/wikipedia/commons/c/cc/Merge-sort-example-300px.gif)
