const mongoose = require('mongoose');
const {Schema} = mongoose;

const ordersSchema = new Schema({
    email:{
        type: String,
        // required: true
    },
    order:{
        type: Array,
        required: true
    }
})

module.exports = mongoose.model('orders', ordersSchema);