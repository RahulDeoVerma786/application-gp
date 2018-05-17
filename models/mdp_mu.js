const mongoose = require('mongoose');

const MdpMUSchema = mongoose.Schema({
	machineid:{
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
	changedby:{
		type: String,
		required: true
	},
	reasons:{
		type: String,
		required: true
	}
});


const AddMdpMU = module.exports = mongoose.model('AddMdpMU',MdpMUSchema);