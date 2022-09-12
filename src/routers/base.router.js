const express = require('express');
const { redirect } = require('express/lib/response');

const router = express.Router();

// Homepage
router.get('/', (req, res) => {
    res.render('./index.njk');
})

router.get('/credits',(req,res) => {
    res.render('./credits.njk');
})

module.exports = router;