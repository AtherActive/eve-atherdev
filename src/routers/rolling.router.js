const express = require('express');
const { redirect } = require('express/lib/response');
const db = require('../modules/database')

const router = express.Router();

// Homepage
router.get('/', (req, res) => {
    res.render('./wormhole/rolling.njk');
})

router.get('/wh',(req,res) => {
    const wh = req.query['wormhole']
    res.redirect(`/rolling/wh/${wh}`)
})
router.get('/wh/:wormholeid', async (req, res) => {
    let wh = await db.getWormhole(req.params.wormholeid.toUpperCase())
    if(wh == null) {
        res.redirect('back');
        return
    }
    res.render('./wormhole/wormhole.njk',{
        pageTitle: `${wh[0].name} - Wormhole Rolling - Atherdev`,
        wormhole: wh[0]
    });
})



module.exports = router;