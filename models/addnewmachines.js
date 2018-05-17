const mongoose = require('mongoose');

const AddNewMachineSchema = mongoose.Schema({
	floorlocation:{
		type: String,
		required: true
	},
	sectionlocation:{
		type: String,
		required: true
	},
	linelocation:{
		type: String,
		required: true
	},
	serialid:{
		type: String,
		required: true
	},
	type:{
		type: String,
		required: true
	},
	make:{
		type: String,
		required: true
	},
	model:{
		type: String,
		required: true
	},
	date:{
		type: String,
		required: true
	},
	buyingprice:{
		type: String,
		required: true
	},
	mfgno:{
		type: String,
		required: true
	}
});


const AddNewMachine = module.exports = mongoose.model('AddNewMachine',AddNewMachineSchema);