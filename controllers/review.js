const Listing = require("../models/listing");
const Review = require("../models/review");

//Post Review Route linked with routes->review.js & ("../models/review")
module.exports.createReview = async(req, res) =>{
  let listing = await Listing.findById(req.params.id);
  let newReview = new Review(req.body.review);
  newReview.author = req.user._id;
  listing.reviews.push(newReview);

  await newReview.save();
  await listing.save();
  req.flash("success" , "New Review Created!");
  res.redirect(`/listings/${listing._id}`); //after submiting review, the page comes back to the same page
}


//Delete Review Route linked with routes->review.js & ("../models/review")
module.exports.destroyReview = async (req, res) => {
  let {id, reviewId} = req.params;

  await Listing.findByIdAndUpdate(id, {$pull: {reviews: reviewId}});
  await Review.findByIdAndDelete(reviewId);
  req.flash("success" , "Review Deleted!");
  res.redirect(`/listings/${id}`);
}