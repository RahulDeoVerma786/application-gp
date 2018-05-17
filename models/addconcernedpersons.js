const mongoose = require('mongoose');

const AddConcernedPersonSchema = mongoose.Schema({
	personid:{
		type: String,
		required: true
	},
	mobilenumber:{
		type: String,
		required: true
	},
	machineassignedid:{
		type: String,
		required: true
	},
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
	}
});


const AddConcernedPerson = module.exports = mongoose.model('AddConcernedPerson',AddConcernedPersonSchema);