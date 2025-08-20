import pg from "pg";
const { Client } = pg;

const client = new Client({
  host: "localhost",
  user: "postgres",
  password: "mysecretpassword",
  database: "productdb",
});
await client.connect();

const productRes = await client.query("SELECT * FROM products");
for (let product of productRes.rows) {
  console.log("product:", product);
}

await client.end();
