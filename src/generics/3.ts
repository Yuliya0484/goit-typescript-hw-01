function merge<T, U>(objA: T, objB: U): T & U {
  return Object.assign({}, objA, objB);
}

const obj1 = { name: "Alice", age: 25 };

const obj2 = { email: "alice@example.com", online: true };

const merged = merge(obj1, obj2);
console.log(merged);

export default merge;
