const express = require('express');

const { readMessages, createMessages, updateMessages, deleteMessages } = require('./controllers/messages_controller');

const app = express();

app.use(express.json());
app.use(express.static(__dirname + '/../public/build'));

app.get('/api/messages', readMessages);
app.post('/api/messages', createMessages);
app.put('/api/messages/:id', updateMessages);
app.delete('/api/messages/:id', deleteMessages);

app.listen(3001, () => console.log('Listening on Port 3001'));