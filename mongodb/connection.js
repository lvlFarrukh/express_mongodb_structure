const mongoose = require('mongoose');

const addUser = require('./createUser');


mongoose.connect('mongodb+srv://farrukha303:arrukh456@cluster0.wcc2p.mongodb.net/testdb?retryWrites=true&w=majority', { useNewUrlParser: true });

mongoose.connection
    .once('open', () =>{
        console.log('Yahoo connect is established')
        addUser('Java', 'Farrukh', 49)
    })
    .on('error', (err) =>{
        console.log('Error:', err)
    })