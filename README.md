## rng-randomnumbergenerator

#### Usage

```js
const rng = require('rng-randomnumbergenerator')

let num1 = rng.gen(100) // Generates an RNG between 0 - 100

let num2 = rng.gen(1, 150) // Generates an RNG between 1 - 150

let RandomForArray = ["I", "am", "Here"]
let RandomFromArray3 = rng.randomFromArray(RandomForArray) // The "RandomForArray" must be an array.

console.log(num1)
console.log(num2)
console.log(RandomFromArray3)
})
```