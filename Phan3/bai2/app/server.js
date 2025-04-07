const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
const port = 3000;

const mongoUri = process.env.MONGO_URI || 'mongodb://mongo:27017/mydb';

app.use(express.json());

let db;
MongoClient.connect(mongoUri, { useUnifiedTopology: true })
  .then(client => {
    db = client.db('mydb');
    console.log('Connected to MongoDB');
  })
  .catch(err => console.error('Failed to connect to MongoDB:', err));

app.post('/add', async (req, res) => {
  try {
    const data = req.body;
    const result = await db.collection('items').insertOne(data);
    res.status(201).json({ message: 'Item added', id: result.insertedId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/items', async (req, res) => {
  try {
    const items = await db.collection('items').find().toArray();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});