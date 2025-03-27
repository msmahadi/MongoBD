// api/fetchData.js

const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = process.env.MONGODB_URI;  // Environment variable for MongoDB URI

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
    console.log(data);  // Log the data to check if it's working.

    return data;  // Return the data as the response.
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    return { error: "Failed to fetch data" };  // Return an error message.
  } finally {
    await client.close();
  }
}

module.exports = run;
