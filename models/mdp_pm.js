const mongoose = require('mongoose');

const MdpPMSchema = mongoose.Schema({
	machineid:{
		type: String,
		required: true
	},
	operatorid:{
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
	},
	category:{
		type: String,
		required: true
	},
	newcategoryinfo:{
		type: String,
	},
	startdate:{
		type: String,
		required: true
	},
	starttime:{
		type: String,
		required: true
	},
	stoptime:{
		type: String,
		required: true
	},
	stopdate:{
		type: String,
		required: true
	}
});


const AddMdpPM = module.exports = mongoose.model('AddMdpPM',MdpPMSchema);