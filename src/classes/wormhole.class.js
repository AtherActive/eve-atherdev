class Wormhole {
    id;
    name;
    initial;
    reducedRoll;
    reducedCrit;
    roll;
    crit;

    constuctor(item={
        id: 0,
        name: A000,
        size: 0,
        initial: [0,0],
        reducedRoll: [0,0],
        reducedCrit: [0,0],
        roll: [0,0],
        crit: [0,0],
        notes: ''
    }) {
        this.id = item.id
        this.name = item.name
        this.initial = item.initial
        this.reducedRoll = item.reducedRoll
        this.reducedCrit = item.reducedCrit
        this.roll = item.roll
        this.crit = item.crit
        this.notes = item.notes
    }
}

module.exports =  {
    Wormhole
}