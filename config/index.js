module.exports = require('mongoose').connect('mongodb://localhost/exercise', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
