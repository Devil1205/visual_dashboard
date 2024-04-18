const mongoose = require('mongoose');
const connectDb = ()=>{
    mongoose.connect(process.env.URI).then(console.log("connected to mongo")).catch(e=>{console.log(e)});
}

module.exports = connectDb;