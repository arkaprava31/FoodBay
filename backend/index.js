const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const cors = require('cors');
const port = 5050;

const connectToDatabase = require('./db');

app.use(cors());
app.use(express.json());
app.use(bodyparser.json());

connectToDatabase();

app.use('/api',require("./Routes/createuser"));
app.use('/api',require("./Routes/Data"));
app.use('/api',require("./Routes/cartOrder"));

app.get('/', (req, res) => {
  res.json({server:port})
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})