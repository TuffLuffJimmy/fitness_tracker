const { Schema, model } = require('mongoose')

module.exports = model(
	'Workout',
	new Schema({
		day: { type: Date, default: () => new Date() },
		exercises: [
			{
				type: {
					type: String,
				},
				name: {
					type: String,
					required: 'exercise needs a name',
				},
				distance: {
					type: Number,
				},
				duration: {
					type: Number,
				},
				weight: {
					type: Number,
				},
				sets: {
					type: Number,
				},
				reps: {
					type: Number,
				},
			},
		],
	})
)
