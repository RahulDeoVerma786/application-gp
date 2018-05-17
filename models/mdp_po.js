const mongoose = require('mongoose');

const MdpPOSchema = mongoose.Schema({
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
	reason:{
		type: String,
		required: true
	},
	startdate:{
		type: String,
		required: true
	},
	starttime:{
		type: String,
		required: true
	}
});


const AddMdpPO = module.exports = mongoose.model('AddMdpPO',MdpPOSchema);