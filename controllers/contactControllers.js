const asyncHandler = require('express-async-handler');
const Contacts=require("../model/contactModel");

const getContact=asyncHandler(async(req,res)=>{
    const contact=await Contacts.find()
    res.status(200).json(contact)
  })

const getContactId=asyncHandler(async(req,res)=>{
    const contact=await Contacts.findById(req.params.id)
    if(!contact){
        res.status(404)
        throw new Error("contact not found")
    }
    res.status(200).json(contact)
})

const postContact=asyncHandler(async(req,res)=>{
    console.log('this is the body',req.body);

    const  {name,email,phone}=req.body 
    if(!name||!email||!phone){
         res.status(400)
         throw new Error("all fileds arr mandory")
    }
    const contact=await Contacts.create({
        name,email,phone
    })
    res.status(200).json(contact)
  })


const putContact=asyncHandler(async(req,res)=>{
    const contact=await Contacts.findById(req.params.id)
    if(!contact){
        res.status(404)
        throw new Error("contact not found")
    }
    const updateContact=await Contacts.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )
    res.status(200).json(updateContact)
  })
const dltContact=asyncHandler(async(req,res)=>{
    // await Contacts.remove()
    await Contacts.deleteOne({_id: req.params.id})
    res.status(200).json(Contacts)
  })

  module.exports={getContact,getContactId,postContact,putContact,dltContact}