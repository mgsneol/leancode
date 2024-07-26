interface IOperation {
  execute(a: number, b: number): number;
}

class Addition implements IOperation {
  execute(a: number, b: number): number {
    return a + b;
  }
}

class Subtraction implements IOperation {
  execute(a: number, b: number): number {
    return a - b;
  }
}

function performOperation(op: IOperation, a: number, b: number): number {
  return op.execute(a, b);
}

const addition = new Addition();
console.log(performOperation(addition, 5, 3));

// OR JUST DO THIS INSTEAD
function add(a: number, b: number): number {
  return a + b;
}

console.log(add(5, 3));
