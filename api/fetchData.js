// api/fetchData.js
import { MongoClient } from "mongodb";

const fetchData = async (req, res) => {
  try {
    const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    const database = client.db("Testcomponents");
    const collection = database.collection("ComponentsOne");

    // Example: limit the query to 100 records
    const data = await collection.find({}).limit(100).toArray();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Error fetching data", details: error.message });
  } finally {
    await client.close();
  }
};

export default fetchData;
