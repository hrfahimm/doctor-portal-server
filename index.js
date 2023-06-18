//FavyxbCK416VU4Uv
const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();
var cors = require('cors');
const app = express();
const port = 5000;
app.use(cors());
app.use(express.json());

const uri =
   'mongodb+srv://doctor-portal:FavyxbCK416VU4Uv@cluster0.kjtydbv.mongodb.net/?retryWrites=true&w=majority';

const client = new MongoClient(uri, {
   serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
   },
});
async function run() {
   try {
      await client.connect();
      console.log('connected');

      const appointmentOptionCollection = client
         .db('doctorsPortal')
         .collection('appointmentOptions');
      const bookingsCollection = client.db('doctorsPortal').collection('bookings');

      app.get('/appointmentOptions', async (req, res) => {
         const query = {};
         const options = await appointmentOptionCollection.find(query).toArray();
         res.send(options);
      });
      app.post('/bookings', async (req, res) => {
         const booking = req.body;
         console.log(booking);
         const result = await bookingsCollection.insertOne(booking);
         res.send(result);
      });
   } finally {
      // await client.close()
   }
}

run().catch(console.dir);

app.get('/', (req, res) => {
   res.send(' server run');
});

app.listen(port, () => {
   console.log(port);
});
 