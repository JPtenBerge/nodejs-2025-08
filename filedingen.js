import { readFile } from "fs";

console.log("start");

readFile("boek.txt", "utf8", (err, content) => {
  if (err) {
    console.error("oh nee!", err);
    return;
  }

  console.log("woeohoe content:", content);
});

setTimeout(() => {
  console.log("timeout klaar!");
}, 0);

for (let i = 0; i < 50000; i++) {
  console.log("i:", i);
}

console.log("eind");
