const mongoose = require('mongoose')
async function startDB(){
    await mongoose.connect('mongodb+srv://matoso:9GOlaGXhR4LEHwzu@lux.xomfi.mongodb.net/');
}

module.exports = startDB;