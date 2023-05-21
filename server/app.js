const users = require('./routes/users');
const auth = require('./routes/auth');
const cards = require('./routes/cards');
const express = require('express');
const app = express();
const http = require('http').Server(app);
require('./config/dbConnect')();

app.use(require('morgan')('dev'));

app.use(require('cors')());
app.use(express.json());

app.use('/api/users', users);
app.use('/api/auth', auth);
app.use('/api/cards', cards);

const port = 3900;
http.listen(port, () => console.log(`Listening on port ${port}...`));