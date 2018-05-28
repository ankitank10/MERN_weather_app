const express = require("express");
const app = express();

const authRoutes = require("./routes/sampleRoutes");
authRoutes(app);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}
const port = process.env.PORT || 9999;
app.listen(port);
