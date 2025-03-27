// project-1.js

const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://kerewev281:EwEt3GswALekuJ0x@cluster0.bj65ojg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    const database = client.db("Testcomponents");
    const collection = database.collection("ComponentsOne");

    const data = await collection.find({}).toArray();
    console.log("Data fetched:", data);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
