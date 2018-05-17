const mongoose = require('mongoose');

const AddNewConsumableCostSchema = mongoose.Schema({
	asstid:{
		type: String,
		required: true
	},
	date:{
		type: String,
		required: true
	},
	name:{
		type: String,
		required: true
	},
	number:{
		type: String,
		required: true
	},
	consumablecost:{
		type: String,
		required: true
	}
});


const AddNewConsumableCost = module.exports = mongoose.model('AddNewConsumableCost',AddNewConsumableCostSchema);