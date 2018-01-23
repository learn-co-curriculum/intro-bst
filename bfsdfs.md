## BFS & DFS

Breadth First Search and Depth First Search are ways to visit all the elements or nodes in a collection that both run in linear time O(n), meaning they visit every node.

What's different is the order in which they visit each node.

Consider our *In order* traversal of a Binary Search Tree.

```js
const printNodes = t => {
  if (t) {
    printNodes(t.left);
    console.log(t.value);
    printNodes(t.right);
  }
};

```

Given the tree:
```code
      21
      / \
    15   24
   / \   / \
  6  18 22  30
```
Our function would log `6, 15, 18, 21, 22, 24, 30`

Notice that we go all the way down to the left-most Leaf nodes and print them before anything else.  The entire left subtree of the root node is explored before anything on the right subtree of the root is considered. This property holds for any given subtree of the tree.

This procedure is known as *Depth First Search*. Based on some decision we are making (always go left first), we are going deep and exploring some sub-section of the collection in detail while leaving elements higher up the tree untouched for the moment.

A *Breadth First Search* of that same tree would print each level of the tree in it's entirety before moving to the next level `21, 15, 24, 6, 18, 22, 30`.

Let's take a look at that code

```js
const breadthPrintNodes = t => {
  const children = [t.left, t.right];
  console.log(t.value);
  while (children.length) {
    const next = children.shift();
    console.log(next.value);
    if (next.left) children.push(next.left);
    if (next.right) children.push(next.right);
  }
};
```

With this strategy we store all the children in the array we, appropriately, have called `children`. We can consider this data structure a [Queue](https://en.wikipedia.org/wiki/Queue_(abstract_data_type)).  Imagine an array where you can only push onto the end and remove from the beginning like a line at a store.  Queue's follow what is known as *FIFO* or First In First Out.

(To lookup: A [Stack](https://en.wikibooks.org/wiki/Data_Structures/Stacks_and_Queues) ) is a data structure that follows *FILO* or First In Last Out)

Our strategy for breadth first traversal of BST is to add the children of the root into the queue, and then while the queue has anything inside of it follow this procedure:
- shift the first element out of the queue
- log it's value
- add it's left child to the queue (if there is one)
- add it's right child to the queue (if there is one)

## BFS vs DFS Merge Sort

This link on [Sorting Visualizations](https://imgur.com/gallery/voutF) is generally pretty interesting.

Take a look at their visualizations of Merge Sort with a Depth first implementation vs a Breadth first implementation.

In class our Merge Sort used Depth First.  If we were sorting an array with 16 elements We would have broken it down into an array of 8 elements, then 4, then 2, then 1 (which is sorted!), merged that 1 element array with the other 1 element array to produce a 2 element sorted array, merged to produce a 4 element sorted array, and so on...

Notice in that implementation one entire half becomes entirely sorted before the other half is even looked at at all.  This is not the case in the Breadth First Merge Sort.  The entire 16 element array would be broken into 16 different 1 elem (i.e. sorted!) arrays. Then 8 different 2 elem sorted arrays, then 4 different 4 elem sorted arrays and so on. Confirm that in the visualization above they take the same amount of time.

We discussed the difference between DFS and BFS but not really when to use one over the other. The answer is it depends!

This is a great place to start:

[When to use BFS vs DFS](https://stackoverflow.com/questions/3332947/when-is-it-practical-to-use-dfs-vs-bfs)

Additionally look into "Recursive Backtracking" as a great use case for the DFS strategy. You can solve some really interesting problems this way.


## Your Task

Try to write your own implementation of the browser's built-in `document.getElementsByClassName` that searches in a Depth-First way (think recursion).  Compare the order of your results to the order of the native browser implementation. Does the browser use DFS or BFS

The beginning of my implementation looks like this, it's here to help but you can implement this however you would like.

```js
// returns array of DOM nodes with given class
const selectAllByClass = (targetClass) => {
  const body = document.body
  const selectedNodes = [];
  const children = Array.from(body.children)

  return recursiveDOMTraverse(selectedNodes, children, targetClass)
}


// helper, returns boolean indicating if node has the class
const hasTargetClass = (node, targetClass) => (
  Array.from(node.classList).includes(targetClass)
)

// does the heavy-lifting, adds nodes to `selectedNodes` and returns
const recursiveDOMTraverse = (selectedNodes, nodes, targetClass) => {
  // ... your code here ...
}
```
