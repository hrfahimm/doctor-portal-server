//FavyxbCK416VU4Uv
const express = require('express');
const { MongoClient } = require('mongodb');
require('dotenv').config();

const app = express();
const port = 5000;

// const uri = ``;
// console.log(uri);
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri =
   'mongodb+srv://doctor-portal:<password>@cluster0.kjtydbv.mongodb.net/?retryWrites=true&w=majority';

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
   try {
      await client.connect();
      //console.log('database connected');
   } finally {
      // await client.close()
   }
}

run().catch(console.dir);

app.get('/', (req, res) => {
   res.send('D server run');
});

app.listen(port, () => {
   console.log(` D server ${port}`);
});
