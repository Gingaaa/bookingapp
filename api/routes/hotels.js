import express from "express";
import { countByCity, countByType, createHotel, deleteHotel, getHotel, getHotelRooms, getHotels, updateHotel } from "../controllers/hotel.js";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";
import { verifyAdmin } from "../utils/verifyTokens.js";

const router = express.Router();


// Create
router.post("/",verifyAdmin, createHotel);

// Update
router.put("/:id", updateHotel);

// Delete
router.delete("/:id",verifyAdmin, deleteHotel);

// Get
router.get("/find/:id", getHotel);

// Get All
router.get("/", getHotels);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/room/:id", getHotelRooms);



export default router;