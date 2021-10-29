const express = require('express');
const router = express.Router();

// See all orders
router.get('/', (req, res) => {
    res.render('orders/index')
});

module.exports = router