const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const routes = require('./routes');

const app = express();
const PORT = 3000;

app.use(cors({
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  allowedHeaders: '*',
  credentials: true,
}));
app.options('*', cors());
app.use(bodyParser.json());

app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
