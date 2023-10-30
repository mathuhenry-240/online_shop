const mongoose = require('mongoose')


mongoose.connect('mongodb://localhost:27017/onlineshop')
        .then(()=>console.log(`db connected`))
        .catch(e=>console.log(`failed to connect \n\n ${e.toString()}`))