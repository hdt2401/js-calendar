import express from 'express';
import cors from 'cors';
import initRoutes from './src/routes';

require('dotenv').config();
require('./db_config.js').testConnection();

const app = express();

const corsOptions = {
  origin: process.env.CLIENT_URL,
  methods: ['GET', 'POST', 'PUT', 'DELETE']
}
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// require('./src/routes/index.js')(app);
initRoutes(app);

// app.use('/', (req, res) => {
//   return res.send('hello world!');
// });

// set port, listen for requests
const PORT = process.env.PORT || 8888;
app.listen(PORT, () => {
  console.log(`server is running on port: ${PORT}`)
});