import { readFile, writeFile, appendFile, chmod,open, readdir  } from "fs/promises";
import { constants } from 'fs';
import {extname} from 'path';





// console.log("start");

// try {
//   let content = await readFile("boek.txt", "utf8");
//   console.log("woeohoe content:", content);
// } catch (err) {
//   console.error("oh nee!", err);
// }


// let promise1 = readFile("boek.txt", "utf8");
// let promise2 = readFile("bla.ts", "utf8");
// let promise3 = readFile("esm-hatseflats.js", "utf8");
// let promise4 = readFile("scoping.js", "utf8");

// let results = await Promise.all([promise1, promise2, promise3, promise4]);
// console.log(results);


// readFile("boek.txt")
//   .then((content) => console.log(content))
//   .catch((err) => console.error("oh nee!", err));

// setTimeout(() => {
//   console.log("timeout klaar!");
// }, 0);

// for (let i = 0; i < 5; i++) {
//   console.log("i:", i);
// }

console.log("eind");

// await chmod('boek2.txt', constants.O_RDONLY);

// await appendFile('boek2.txt', 'Er was eens................');
// Problem Exists Between Chair And Keyboard
// ID10T
// Layer 8 problem

let files = await readdir('./');
for(let file of files) {
  console.log(file, extname(file));
}
