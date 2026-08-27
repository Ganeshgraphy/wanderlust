require("dotenv").config({ path: "../.env" });

const mongoose = require("mongoose");
const initData = require("./data");
const Listing = require("../models/listing");
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");

const MONGO_URL = process.env.ATLAS_URL;

async function main() {
  await mongoose.connect(MONGO_URL);
}
main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

const geocodingClient = mbxGeocoding({
  accessToken: process.env.MAP_TOKEN,
});

const initDB = async () => {
  await Listing.deleteMany({});

  const listingsWithCoordinates = await Promise.all(
    initData.data.map(async (listing) => {
      const response = await geocodingClient
        .forwardGeocode({
          query: `${listing.location}, ${listing.country}`,
          limit: 1,
        })
        .send();

      return {
        ...listing,
        owner: "6a1d45e4c253c8143c163adc",
        geometry: response.body.features[0].geometry,
      };
    }),
  );

  await Listing.insertMany(listingsWithCoordinates);

  console.log("DB Initialized");
};

initDB();
