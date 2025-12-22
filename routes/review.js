const express = require("express");
const router = express.Router({mergeParams: true}); //here we used merge param because we wanted to get the id from the body to make a review
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing");
const {validateReview, isLoggedIn, reviewAuthor} = require("../middleware.js");

const reviewController = require("../controller/reviews.js");

//Reviews (Post review Route)
router.post("/",isLoggedIn, validateReview, wrapAsync(reviewController.createReview));


//Delete Review Route
router.delete("/:reviewId", isLoggedIn, reviewAuthor, wrapAsync(reviewController.destroyReview));

module.exports = router;