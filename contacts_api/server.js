const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
let cors = require('cors')
const contact = require('./routes/contact.route');
const app = express();
const db = require('./config/keys').mongoURI;

//DB Connection
mongoose
  .connect(db)
  .then(() => {
    console.log('MongoDB Connected');
  })
  .catch(err => {
    console.log(err);
    console.log('MongoDB Not Connected');
});

//Form parsing
app.use(cors())
app.use(express.json())

//Routes
app.get('/', (req, res) => {
  res.send("Hello World");
});
app.use('/contacts', contact);

//Setup Port
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server running on port ${port}`));