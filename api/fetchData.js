import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
    const uri = 'mongodb+srv://kerewev281:EwEt3GswALekuJ0x@cluster0.mongodb.net/?retryWrites=true&w=majority';

    const client = new MongoClient(uri);

    try {
        await client.connect();
        const database = client.db('Testcomponents');
        const collection = database.collection('ComponentsOne');
        const data = await collection.find().toArray();

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching data', details: error.message });
    } finally {
        await client.close();
    }
}
