import mongodb from 'mongodb';
const { MongoClient } = mongodb;

let client = await MongoClient.connect('mongodb://localhost:27017');
let db = client.db('fakeshopdb');

const collection = db.collection('products');

await collection.insertOne({
   name: 'iPhone 12 adapter',
   prijs: 55.00,
});

const products = await collection.find().toArray();
console.log('Products in database:', products);

// ORM/ODM: Mongoose 