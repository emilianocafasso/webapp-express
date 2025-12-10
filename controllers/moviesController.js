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

    // recupero l'id dall'URL
    const id = req.params.id

    const movieSql = 'SELECT * FROM movies WHERE id = ?'

    // prapato la query per le recensioni
    const reviewsSql = 'SELECT name, vote, text FROM reviews WHERE movie_id = ?'

    connection.query(movieSql, [id], (err, movieResults) => {
        if (err) return res.status(500).json({ error: 'Database query failed' })
        if (movieResults.length === 0) return res.status(404).json({ error: 'Movie not found' })

        // recupero il movie
        const movie = movieResults[0]

        // se la prima query è andata a buon fine, eseguo la seconda per le reviews
        connection.query(reviewsSql, [id], (err, reviewsResults) => {
            if (err) return res.status(500).json({ error: 'Database query failed' })

            // aggiungo la recensione al movie
            movie.reviews = reviewsResults
            res.json(movie)
        })
    })
}


module.exports = {
    index,
    show
}