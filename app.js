const express = require('express')
const db = require('./data/db')
const moviesRuoter = require('./routers/movies')

const app = express()
const port = 3000

app.use(express.static('public'))
app.use(express.json())

app.use('/movies', moviesRuoter)

app.get('/', (req, res) => {
    res.send('Server')
})




app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
})