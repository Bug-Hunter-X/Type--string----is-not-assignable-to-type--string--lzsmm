# Type 'string[]' is not assignable to type 'string'
This example demonstrates a common TypeScript error:  Type 'string[]' is not assignable to type 'string'.

The `greeter` function expects a single string as input, but it's called with an array of strings.  TypeScript's type system correctly identifies this as a type mismatch. The `bug.ts` file contains the erroneous code, and `bugSolution.ts` provides a solution.

## How to reproduce
1. Save `bug.ts`
2. Compile using the TypeScript compiler: `tsc bug.ts`
3. Observe the compilation error.