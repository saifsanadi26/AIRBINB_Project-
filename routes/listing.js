const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const {isLoggedIn, isOwner, validateListing} = require("../middleware.js");
const listingController = require("../controllers/listings.js");
const multer = require("multer");
const {storage} = require("../cloudConfig.js")
const upload = multer({storage});  //multer will save all the files in "storage" in cloud


//Index Route & Create Route callback linked with ("../controllers/listings.js")
router.route("/")
.get( wrapAsync(listingController.index))
.post( 
    isLoggedIn, 
    upload.single('listing[image]'),  
    validateListing, 
    wrapAsync(listingController.createListing)
);

//New Route callback linked with ("../controllers/listings.js")
router.get("/new", isLoggedIn, listingController.renderNewForm);

//Show Route, Update Route & Delete Route callback linked with ("../controllers/listings.js")
router.route("/:id")
.get( wrapAsync(listingController.showListing))
.put( 
    isLoggedIn, 
    isOwner, 
    upload.single('listing[image]'), 
    validateListing, 
    wrapAsync(listingController.updateListing)
)
.delete( isLoggedIn, isOwner, wrapAsync(listingController.destroyListing));

//Edit Route callback linked with ("../controllers/listings.js") 
router.get(
    "/:id/edit", 
    isLoggedIn, 
    isOwner, 
    wrapAsync(listingController.renderEditForm)
);

module.exports = router;