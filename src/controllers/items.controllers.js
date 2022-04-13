const itemsCtrl = {}

const Item = require('../models/item.models')

itemsCtrl.getItems = async (req, res) => {
    res.json(await Item.find())
}

itemsCtrl.createItems = async (req, res) => {
    await Item.create(req.body)
    res.json('item created')
}

itemsCtrl.getItem = async (req, res) => {
    res.json(await Item.findById(req.params.id))
}

itemsCtrl.updateItems = async (req, res) => {
    await Item.findByIdAndUpdate(req.params.id, req.body)
    res.json('item updated')
}

itemsCtrl.deleteItems = async (req, res) => {
    await Item.findByIdAndDelete(req.params.id)
    res.json('item deleted')
}


module.exports = itemsCtrl
