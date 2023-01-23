import User from "../models/User.js";

// UPDATE
export const updateUser = async (req,res,next) =>{
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {$set: req.body},{new:true});
        res.status(200).json(updatedUser)
        
    } catch (err) {
        next(err);
    }
}
// DELETE
export const deleteUser = async (req,res,next) =>{
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User is Deleted")
        
    } catch (err) {
        next(err);
    }
}
// GET HOTEL
export const getUser = async (req,res,next) =>{
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user)
        
    } catch (err) {
        next(err);
    }
}
// GET ALL HOTELS
export const getUsers = async (req,res,next) =>{
    try {
        const users = await User.find();
        res.status(200).json(Users)
        
    } catch (err) {
        next(err);
    }
}