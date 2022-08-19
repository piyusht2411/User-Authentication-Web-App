const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/social-chat');

const db = mongoose.connection;
db.on('error', (err)=>{ console.log("Error connecting to the database");})
db.once('open ', ()=>{
    console.log("Succesfully connected to the database");
})