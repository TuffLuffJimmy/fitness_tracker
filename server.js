require('dotenv').config()
const express = require('express')
const app = express()


app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(express.json())

app.use(require('./routes'))

require('./config')
	.then(() => app.listen(3000, () => console.log('running on port 3000 ', process.env.SECRET_MESSAGE)))
	.catch((err) => console.error(err))
