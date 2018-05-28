const express = require("express");
const app = express();

const authRoutes = require("./routes/sampleRoutes");
authRoutes(app);


const port = process.env.PORT || 9999;
app.listen(port);
