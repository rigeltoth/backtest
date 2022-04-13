const { Router } = require('express')
const itemsCtrl = require('../controllers/items.controllers')

const router = Router()

router.get('/', itemsCtrl.getItems)
router.post('/', itemsCtrl.createItems)
router.get('/:id', itemsCtrl.getItem)
router.put('/:id', itemsCtrl.updateItems)
router.delete('/:id', itemsCtrl.deleteItems)

module.exports = router