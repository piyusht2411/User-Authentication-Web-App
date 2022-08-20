const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/social-chat');

const db = mongoose.connection;
db.on('error', (err)=>{ console.log(err.message);})
db.once('open ', function(){
    console.log("Succesfully connected to the database");
})