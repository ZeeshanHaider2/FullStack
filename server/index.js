const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
require("./models/User"); //the order can make a difference i.e.it should come above
require("./services/passport");

mongoose.connect(keys.mongoURI);

const app = express();

require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000; //5000, if running server locally
app.listen(PORT);
