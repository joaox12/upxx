const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Conecta ao MongoDB
mongoose.connect('mongodb://localhost:27017/pharmashare', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Define o schema e modelo do usuário
const userSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    numero: String,
    senha: String,
    genero: String
});

const User = mongoose.model('User', userSchema);

app.use(bodyParser.json());
app.use(cors());

// Rota para adicionar um novo usuário
app.post('/adicionar', (req, res) => {
    const newUser = new User(req.body);

    newUser.save((err) => {
        if (err) {
            return res.status(500).send('Error saving user: ' + err);
        }
        res.status(200).send('User saved successfully');
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
