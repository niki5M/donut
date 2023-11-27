var MongoClient = require('mongodb').MongoClient
const uri = "mongodb://localhost:27017/"
const client = new MongoClient(uri)
async function run() {
  try {
    await client.connect();
    var database = client.db("donutBD");
    database.dropDatabase()
    database = client.db("donutBD");
    const donuts = database.collection("donuts");
    const result = await donuts.insertOne({name:"Пончик"});
    console.log(`${result} documents were inserted`);
  } finally {
    await client.close();
  }
}
run()
