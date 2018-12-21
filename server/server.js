const express = require('express')
const mongoose = require('mongoose')
const app = express()

const DB_URL = 'mongodb://localhost:27017/react'
mongoose.connect(DB_URL)
mongoose.connection.on('connected', function() {
    console.log('mongoose has been connected!')
})

const User = mongoose.model('user', new mongoose.Schema({
    user: {type: String, require: true},
    age: {type: Number, require: true}
}))

// User.update({name: 'yjm'}, {'$set': {age: 20}}, function(err, doc) {
//     console.log(doc)
// })

// User.create({
//     name: 'yjm',
//     age: 22
// }, function(err, doc) {
//     if(!err) {
//         console.log(doc)
//     } else {
//         console.log(err)
//     }
// })

// User.remove({age: 1}, function(err, doc) {
//     console.log(doc)
// })

app.get('/', function(req, res) {
    User.find({}, function(err, doc) {
        return res.json(doc)
    })
})

app.get('/data', function(req, res) {
    res.json({user: 'Mr.Chang', type: 'IT', age: 24})
})

app.listen(9093, function() {
    console.log('express has been connected!')
})