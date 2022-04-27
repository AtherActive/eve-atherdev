const db = require('mysql2');
const { Wormhole } = require('../classes/wormhole.class')

let database = db.createConnection({
    host: '10.0.100.2',
    database: 'atherdev-eve',
    user: 'zeta',
    password: 'zeta'
})

function decodeField(field) {
    let split = field.split(',')
    let cold = 0
    let hot = 0
    
    split.forEach(element => {
        if(element[1] == 'c') {
            cold = parseInt(element[0])
        } else {
            hot = parseInt(element[0])
        }
    });
    return{
        cold: cold,
        hot: hot
    }

}


async function getWormhole(identifier) {
    return await new Promise((resolve) => {
        database.execute('SELECT * FROM wormholerolling WHERE name=?',[identifier], (err,res) => {
            if(res[0] == undefined) {
                resolve(null)
            } else {
                res[0].initial = decodeField(res[0].initial)
                res[0].reducedRoll = decodeField(res[0].reducedRoll)
                res[0].reducedCrit = decodeField(res[0].reducedCrit)
                res[0].roll = decodeField(res[0].roll)
                res[0].crit = decodeField(res[0].crit)
                
                resolve(res)
            }
        })
    })
}

module.exports = {
    database,
    getWormhole
}