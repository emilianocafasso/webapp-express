const connection = require('../data/db');
const db = require('../data/db')

// INDEX
const index = (req, res) => {
    console.log('Richiesta ricevuta: INDEX');

    // prapato la query
    const sql = 'SELECT * FROM movies'

    // eseguo la query
    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: 'Database query failed' })
        res.json(results)
    })
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