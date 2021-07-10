const express = require("express");
const path = require("path");

const app = express();

app.use('/static', express.static(path.resolve(__dirname,'frontend','static')));

//any path/route at all (*=all) were going to go back to the root and send back (index.html)
app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname,"frontend", "index.html"));
});

app.listen(process.env.PORT || 8080, () => console.log("Server running..."));

