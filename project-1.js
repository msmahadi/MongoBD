const { MongoClient } = require('mongodb');

// MongoDB কানেকশন URI
const uri = 'mongodb+srv://kerewev281:EwEt3GswALekuJ0x@cluster0.mongodb.net/?retryWrites=true&w=majority';

// MongoDB থেকে ডাটা ফেচ করার ফাংশন
async function fetchData() {
    const client = new MongoClient(uri);

    try {
        await client.connect(); // MongoDB তে কানেক্ট করা
        const database = client.db('Testcomponents'); // ডাটাবেজ সিলেক্ট করা
        const collection = database.collection('ComponentsOne'); // কালেকশন সিলেক্ট করা
        const data = await collection.find().toArray(); // সমস্ত ডাটা নিয়ে আসা

        console.log('Fetched Data:', data); // কনসোলে ডাটা দেখানো
    } catch (error) {
        console.error('Error fetching data:', error);
    } finally {
        await client.close(); // কানেকশন বন্ধ করা
    }
}

// ফাংশন রান করা
fetchData();
