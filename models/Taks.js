const mongoose = require('mongoose')
const Schema = mongoose.Schema()


const TaksSchema = new Schema({
    task_name: {
        type: String,
        required: true
    },

    tags:{
        type: Array,
        required: false
    },
    
    status:{
        type: String,
        required: true
    }
}, {
    timestamps:{
        createdAt: 'create_at'
    }
})

const Task = mongoose.model('Task', TaksSchema)

module.exports= Task;