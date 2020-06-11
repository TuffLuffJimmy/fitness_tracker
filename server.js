const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

require('./config')
	.then(() => app.listen(3000, () => console.log('running on port 3000')))
	.catch((err) => console.error(err))
