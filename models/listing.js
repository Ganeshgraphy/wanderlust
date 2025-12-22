const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");

const listingSchema = new Schema({
    title: {type: String, required: true},
    description: String,
    image: {
        // Change the type to an Object structure (or nested schema)
        // to handle both 'url' and 'filename' fields.
        
        url: { // New nested field for the URL
            type: String,
            default: "https://unsplash.com/photos/palm-tree-near-seashore-Siuwr3uCir0",
            // The set function is often moved here if it only applies to the URL.
            // Simplified set logic is often preferred for Image objects.
            set: (v) => v === "" ? "https://unsplash.com/photos/palm-tree-near-seashore-Siuwr3uCir0" : v,
        },
        filename: String, // New nested field for the filename
    },
    price: Number,
    location: String,
    country: String,
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review",
        }
    ],
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },

    geometry: {
    type: {
      type: String, // Don't do `{ location: { type: String } }`
      enum: ['Point'], // 'location.type' must be 'Point'
      required: true
    },
    
    coordinates: {
      type: [Number],
      required: true
    }
    },
    
    
});

listingSchema.post("findOneAndDelete", async(listing) => {
    if(listing) {
        await Review.deleteMany({_id: { $in: listing.reviews}});
    }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;