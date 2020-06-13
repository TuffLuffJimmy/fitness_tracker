require('dotenv/config')
const express = require('express')
const { join } = require('path')
const app = express()


app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(express.json())

app.use(require('./routes'))

app.get('/',(req, res) => {
	res.sendFile(join(__dirname, './public/index.html'))
})

app.get('/stats', (req, res) => {
	res.sendFile(join(__dirname, './public/stats.html'))
})

app.get('/exercise', (req, res) => {
	res.sendFile(join(__dirname, "./public/exercise.html"))
})

require('./config')
	.then(() => app.listen(3000, () => console.log('running on port 3000 ', process.env.SECRET_MESSAGE)))
	.catch((err) => console.error(err))
