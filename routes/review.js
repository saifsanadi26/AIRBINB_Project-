const express = require("express");
const router = express.Router({mergeParams : true});
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const {validateReview, isLoggedIn, isReviewOwner} = require("../middleware.js");

const reviewController = require("../controllers/review.js")

//Post Review Route linked with ("../controllers/review.js")
router.post("/", isLoggedIn, validateReview, wrapAsync(reviewController.createReview));

//Delete Review Route linked with ("../controllers/review.js")
router.delete("/:reviewId",isLoggedIn,isReviewOwner, wrapAsync(reviewController.destroyReview));

module.exports = router;