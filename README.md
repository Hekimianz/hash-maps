# HashMap Implementation in JavaScript

## Overview

This project is a custom implementation of a HashMap in JavaScript, demonstrating how hash tables work, including handling collisions and dynamic resizing. The HashMap allows you to store key-value pairs with efficient retrieval and manipulation.

## Features

- **Hashing Function**: Utilizes a hashing function to compute a hash code from a string key.
- **Collision Resolution**: Implements separate chaining to handle collisions.
- **Dynamic Resizing**: Automatically resizes the internal array when the load factor exceeds a threshold (0.75).
- **Key-Value Operations**: Supports basic operations such as setting, getting, removing, and checking the existence of keys.
- **Utility Methods**: Includes methods to retrieve keys, values, entries, and to clear the map.

## Installation

To use this HashMap, simply clone the repository and include the `HashMap.js` file in your project.

```bash
git clone <repository-url>
```

## Usage

### Creating a HashMap

```javascript
import { HashMap } from "./HashMap.js";

const myHashMap = new HashMap();
```

### Adding Key-Value Pairs

```javascript
myHashMap.set("apple", "red");
myHashMap.set("banana", "yellow");
```

### Retrieving Values

```javascript
console.log(myHashMap.get("apple")); // Outputs: red
console.log(myHashMap.get("banana")); // Outputs: yellow
```

### Checking Existence of Keys

```javascript
console.log(myHashMap.has("apple")); // Outputs: true
console.log(myHashMap.has("grape")); // Outputs: false
```

### Removing Keys

```javascript
myHashMap.remove("apple");
console.log(myHashMap.get("apple")); // Outputs: null
```

### Utility Methods

- **length()**: Returns the number of key-value pairs in the HashMap.
- **clear()**: Removes all entries from the HashMap.
- **keys()**: Returns an array of all keys in the HashMap.
- **values()**: Returns an array of all values in the HashMap.
- **entries()**: Returns an array of key-value pairs.

### Example

```javascript
const testMap = new HashMap();
testMap.set("cat", "black");
testMap.set("dog", "brown");
testMap.set("elephant", "gray");

console.log(testMap.entries());
// Outputs: [['cat', 'black'], ['dog', 'brown'], ['elephant', 'gray']]
```

## Testing

To test the HashMap functionality, you can create a new JavaScript file and run various methods as demonstrated in the usage section.

```bash
node test.js
```

## Acknowledgments

- Inspired by data structures and algorithms principles.
