const { default: mongoose } = require('mongoose');
const moongoose = require('mongoose')
const Schema = moongoose.Schema;

const productosSchema = new Schema({
    nombre:{
        type: String,
        trim: true
    },
    precio:{
        type: Number
    },
    imagen:{
        type: String
    }
});
module.exports = mongoose.model('Productos', productosSchema);