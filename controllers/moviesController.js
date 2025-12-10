const db = require('../data/db')

// INDEX
const index = (req, res) => {
    console.log('Richiesta ricevuta: INDEX');
    res.send('Movie list')
}

// SHOW
const show = (req, res) => {
    console.log('Richiesta ricevuta: SHOW');
    res.send('Movie')
}


module.exports = {
    index,
    show
}