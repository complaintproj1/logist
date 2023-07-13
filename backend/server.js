const express = require('express');
const app = express();
const dotenv = require('dotenv')
const PORT = process.env.PORT || 8086
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
var routes = require('./routes/routes');
const cors = require('cors');

app.use(express.static(path.join(__dirname, 'dist/notus-angular')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/notus-angular/index.html'));
});

dotenv.config()

app.use(
  cors({
    origin: 'https://daakgadi.web.app',
  })
);
 
  mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("Connection Successful")
}).catch((err)=>console.log(err));




app.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT}`)
})

app.use(express.json());

app.use(routes);