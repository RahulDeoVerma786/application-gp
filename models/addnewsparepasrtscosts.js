const mongoose = require('mongoose');

const AddNewSparePartsCostSchema = mongoose.Schema({
	asstid:{
		type: String,
		required: true
	},
	date:{
		type: String,
		required: true
	},
	category:{
		type: String,
		required: true
	},
	number:{
		type: String,
		required: true
	},
	sparecost:{
		type: String,
		required: true
	}
});


const AddNewSparePartsCost = module.exports = mongoose.model('AddNewSparePartsCost',AddNewSparePartsCostSchema);