const mongoose = require('mongoose')

mongoose
    .connect('mongodb+srv://rigeltoth:inexorable@cluster0.lhouh.mongodb.net/mdbprueba?retryWrites=true&w=majority')
    .then(console.log('mdb connected'))
    .catch(err => console.log(err))