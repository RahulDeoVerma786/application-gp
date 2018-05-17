const mongoose = require('mongoose');

const MdpSDSchema = mongoose.Schema({
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
	startdate:{
		type: String,
		required: true
	},
	starttime:{
		type: String,
		required: true
	}
});


const AddMdpSD = module.exports = mongoose.model('AddMdpSD',MdpSDSchema);