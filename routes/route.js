const express = require('express');
const router = express.Router();

const fs = require('fs');
const solc = require('solc');

const AddConcernedPerson = require('../models/addconcernedpersons');
const AddNewMachine = require('../models/addnewmachines');
const AddNewConsumableCost = require('../models/addnewconsumablecosts');
const AddNewSparePartsCost = require('../models/addnewsparepasrtscosts');
const AddMdpPM = require('../models/mdp_pm');
const AddMdpPO = require('../models/mdp_po');
const AddMdpSD = require('../models/mdp_sd');
const AddMdpMU = require('../models/mdp_mu');
//const Tokentrade = require('../models/tokentrade');

//Create Token CRUD Opearations
//retrieving data
router.get('/addconcernedpersons',(req, res, next)=>{
	// res.send('Retrieving the tokens list');
	AddConcernedPerson.find(function(err,addconcernedpersons){
		res.json(addconcernedpersons);
	});
});

router.get('/addnewmachines',(req, res, next)=>{
	// res.send('Retrieving the tokens list');
	AddNewMachine.find(function(err,addnewmachines){
		res.json(addnewmachines);
	});
});

router.get('/addnewconsumablecosts',(req, res, next)=>{
	// res.send('Retrieving the tokens list');
	AddNewConsumableCost.find(function(err,addnewconsumablecosts){
		res.json(addnewconsumablecosts);
	});
});

router.get('/addnewsparepasrtscosts',(req, res, next)=>{
	// res.send('Retrieving the tokens list');
	AddNewSparePartsCost.find(function(err,addnewsparepasrtscosts){
		res.json(addnewsparepasrtscosts);
	});
});

router.get('/mdp_pms',(req, res, next)=>{
	// res.send('Retrieving the tokens list');
	AddMdpPM.find(function(err,mdp_pms){
		res.json(mdp_pms);
	}).sort({startdate:'desc'});
});

router.get('/mdp_pos',(req, res, next)=>{
	// res.send('Retrieving the tokens list');
	AddMdpPO.find(function(err,mdp_pos){
		res.json(mdp_pos);
	});
});

router.get('/mdp_sds',(req, res, next)=>{
	// res.send('Retrieving the tokens list');
	AddMdpSD.find(function(err,mdp_sds){
		res.json(mdp_sds);
	});
});

router.get('/mdp_mus',(req, res, next)=>{
	// res.send('Retrieving the tokens list');
	AddMdpMU.find(function(err,mdp_mus){
		res.json(mdp_mus);
	});
});

// router.get('/index',(req, res, next)=>{
// 	// res.send('Retrieving the tokens list');
// 	res.render('createContract.ejs', {bytecode: bytecode, abi: abi, contract: result});
// });

//add createtoken
router.post('/addconcernedperson',(req, res, next)=>{
	console.log(req.body)
	//logic for creating a token
	let newAddConcernedPerson = new AddConcernedPerson({
		personid: req.body.personID,
		mobilenumber: req.body.mobileNumber,
		machineassignedid: req.body.machineassignedId,
		floorlocation: req.body.floorLocation,
		sectionlocation: req.body.sectionLocation,
		linelocation: req.body.lineLocation
	});
	newAddConcernedPerson.save((err,addconcernedperson)=>{
		if(err)
		{
			res.json({msg: 'Failed to create new review'});
		}
		else{
			res.json({msg: 'New review added successfully'});
		}
	});
});

router.post('/addnewmachine',(req, res, next)=>{
	console.log(req.body)
	//logic for creating a token
	let newAddNewMachine = new AddNewMachine({
		floorlocation: req.body.floorLocation,
		sectionlocation: req.body.sectionLocation,
		linelocation: req.body.lineLocation,
		serialid: req.body.serialId,
		type: req.body.Type,
		make: req.body.Make,
		model: req.body.Model,
		date: req.body.Date,
		buyingprice: req.body.buyingPrice,
		mfgno: req.body.mfgNo
	});
	newAddNewMachine.save((err,addnewmachine)=>{
		if(err)
		{
			res.json({msg: 'Failed to create new review'});
		}
		else{
			res.json({msg: 'New review added successfully'});
		}
	});
});

router.post('/addnewconsumablecost',(req, res, next)=>{
	console.log(req.body)
	//logic for creating a token
	let newAddNewConsumableCost = new AddNewConsumableCost({
		asstid: req.body.assetID,
		date: req.body.datE,
		name: req.body.namE,
		number: req.body.numbeR,
		consumablecost: req.body.consumableCost
	});
	newAddNewConsumableCost.save((err,addnewconsumablecost)=>{
		if(err)
		{
			res.json({msg: 'Failed to create new review'});
		}
		else{
			res.json({msg: 'New review added successfully'});
		}
	});
});

router.post('/addnewsparepasrtscost',(req, res, next)=>{
	console.log(req.body)
	//logic for creating a token
	let newAddNewSparePartsCost = new AddNewSparePartsCost({
		asstid: req.body.assetID,
		date: req.body.datE,
		category: req.body.categorY,
		number: req.body.numbeR,
		sparecost: req.body.spareCost
	});
	newAddNewSparePartsCost.save((err,addnewsparepasrtscost)=>{
		if(err)
		{
			res.json({msg: 'Failed to create new review'});
		}
		else{
			res.json({msg: 'New review added successfully'});
		}
	});
});

router.post('/mdp_pm',(req, res, next)=>{
	console.log(req.body)
	//logic for creating a token
	let newAddMdpPM = new AddMdpPM({
		machineid: req.body.machineID,
		operatorid: req.body.operatorID,
		floorlocation: req.body.floorLocation,
		sectionlocation: req.body.sectionLocation,
		linelocation: req.body.lineLocation,
		category: req.body.caTegory,
		newcategoryinfo: req.body.newCategoryInfo,
		startdate: req.body.startDate,
		starttime: req.body.startTime,
		stopdate: req.body.stopDate,
		stoptime: req.body.stopTime
	});
	newAddMdpPM.save((err,mdp_pm)=>{
		if(err)
		{
			res.json({msg: 'Failed to create new review'});
		}
		else{
			res.json({msg: 'New review added successfully'});
		}
	});
});

router.post('/mdp_po',(req, res, next)=>{
	console.log(req.body)
	//logic for creating a token
	let newAddMdpPO = new AddMdpPO({
		operatorid: req.body.operatorID,
		floorlocation: req.body.floorLocation,
		sectionlocation: req.body.sectionLocation,
		linelocation: req.body.lineLocation,
		category: req.body.caTegory,
		reason: req.body.reaSon,
		startdate: req.body.startDate,
		starttime: req.body.startTime
	});
	newAddMdpPO.save((err,mdp_po)=>{
		if(err)
		{
			res.json({msg: 'Failed to create new review'});
		}
		else{
			res.json({msg: 'New review added successfully'});
		}
	});
});

router.post('/mdp_sd',(req, res, next)=>{
	console.log(req.body)
	//logic for creating a token
	let newAddMdpSD = new AddMdpSD({
		floorlocation: req.body.floorLocation,
		sectionlocation: req.body.sectionLocation,
		linelocation: req.body.lineLocation,
		category: req.body.caTegory,
		startdate: req.body.startDate,
		starttime: req.body.startTime
	});
	newAddMdpSD.save((err,mdp_sd)=>{
		if(err)
		{
			res.json({msg: 'Failed to create new review'});
		}
		else{
			res.json({msg: 'New review added successfully'});
		}
	});
});

router.post('/mdp_mu',(req, res, next)=>{
	console.log(req.body)
	//logic for creating a token
	let newAddMdpMU = new AddMdpMU({
		machineid: req.body.machineID,
		floorlocation: req.body.floorLocation,
		sectionlocation: req.body.sectionLocation,
		linelocation: req.body.lineLocation,
		changedby: req.body.changedBy,
		reasons: req.body.reaSons
	});
	newAddMdpMU.save((err,mdp_mu)=>{
		if(err)
		{
			res.json({msg: 'Failed to create new review'});
		}
		else{
			res.json({msg: 'New review added successfully'});
		}
	});
});

//delete createtoken
// router.delete('/addconcernedperson/:id',(req, res, next)=>{
// 	//logic for deleting a token
// 	AddConcernedPerson.remove({_id: req.params.id},function(err,result){
// 		if(err){
// 			res.json(err);
// 		}
// 		else{
// 			res.json(result);
// 		}
// 	});
// });



module.exports = router;