const moongoose = require('mongoose')
const Schema = moongoose.Schema;

const pedidosSchema = new Schema({
    cliente: {
        type: Schema.ObjectId,
        ref: 'Clientes'
    },
    productos: [{
        producto: {
            type: Schema.ObjectId,
            ref: 'Productos'
        },
        cantidad: Number
    }],
    total: {
        type: Number
    }
});

module.exports = moongoose.model('Pedidos', pedidosSchema);