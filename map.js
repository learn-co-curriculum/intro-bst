// A 'Hash' backed by an Array
// class Map {
//   constructor() {
//     // [[key, value], [key, value], ...]
//     // [['a', 1], ['b', 2]]
//     this.items = [];
//   }
//
//   getValue(key) {
//     const item = this.items.find(item => item[0] === key);
//     if (item) {
//       return item[1];
//     }
//   }
//
//   add(key, value) {
//     const item = this.items.find(item => item[0] === key);
//     if (item) {
//       item[1] = value;
//     } else {
//       this.items.push([key, value]);
//     }
//   }
// }

// Implementation | Operation   |  Runtime
// ---------------|-------------|---------
//  Array         |  getValue   | O(n)
//  Array         |  add        | O(n)
//  Sorted Array  |  add        | O(n)
//  Sorted Array  |  getValue   | O(logN)

class Map {
  constructor() {
    // [[key, value], [key, value], ...]
    // [['a', 1], ['b', 2]]
    this.root = undefined;
  }

  getValue(key) {}

  add(key, value) {
    if (!root) {
      this.root = { key, value, left: null, right: null };
    } else {
    }
  }
}
