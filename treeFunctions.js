const printNodes = t => {
  if (t) {
    printNodes(t.left);
    console.log(t.value);
    printNodes(t.right);
  }
};

const contains = (t, target) => {
  if (t) {
    if (t.value === target) return t.value;
    if (target <= t.value) {
      return contains(t.left, target);
    } else if (target > t.value) {
      return contains(t.right, target);
    }
  }
  return false;
};

const addNode = (t, value) => {
  if (t) {
    if (value <= t.value) {
      if (t.left) {
        addNode(t.left, value);
      } else {
        t.left = { value, right: null, left: null };
      }
    } else if (value > t.value) {
      if (t.right) {
        addNode(t.right, value);
      } else {
        t.right = { value, right: null, left: null };
      }
    }
  }
};

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
