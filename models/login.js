const mongoose = require('mongoose')

const loginSchema = new mongoose.Schema({
  
    Email: {
        type: String
    },
    Password: {
        type: String
    },
})
module.exports = mongoose.model('login' , loginSchema)