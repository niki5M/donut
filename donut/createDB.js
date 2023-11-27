var MongoClient = require('mongodb').MongoClient
var data = require("./data.js").data
const uri = "mongodb://localhost:27017/"
const client = new MongoClient(uri)
async function run() {
  try {
    await client.connect();
    var database = client.db("donutBD");
    database.dropDatabase()
    database = client.db("donutBD");
    const donuts = database.collection("donuts");
    const result = await donuts.insertMany(data);
    console.log(`${result.insertedCount} documents were inserted`);
  } finally {
    await client.close();
  }
}
run()
