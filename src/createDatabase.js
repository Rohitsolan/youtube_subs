const mongoose = require("mongoose");
const Subscriber = require("./models/subscriber");
const data = require("./data");
require("dotenv").config();

// Connect to database
const dburl = process.env.connectionString;

mongoose
  .connect(dburl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Database connected1");
  })
  .catch((err) => {
    console.log("Error connecting to database", err);
  });
console.log("refresh");

// Refresh data in subscribers collection
async function refreshData() {
  try {
    await Subscriber.deleteMany({}, { wtimeout: 30000 });

    console.log("Deleted all subscribers");
    const newSubscribers = await Subscriber.insertMany(data);
    console.log(`Added ${newSubscribers.length} new subscribers`);
  } catch (err) {
    console.log("Error refreshing data", err);
  } finally {
    mongoose.disconnect();
    console.log("Disconnected from database");
  }
}

refreshData();
