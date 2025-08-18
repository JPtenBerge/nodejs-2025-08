import { calculator} from 'calculator-extreme-edition';

let result = calculator.add(4, 8);
console.log(result);


let timeoutId: ReturnType<typeof setTimeout> = setTimeout(() => {}, 2000);
// console.log(timeoutId.toString());

// if (typeof timeoutId === 'number') {
// }

clearTimeout(timeoutId);