const { Schema, model } = require('mongoose')

const ItemSquema = new Schema({
    name: {type: String},
    cant: {type: Number}
},{
    timestamps: true,
    versionKey: false
}
)

module.exports = model('Item', ItemSquema)