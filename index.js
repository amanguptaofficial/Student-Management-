const express = require("express");
const mongoose = require("mongoose");
const app = express();
const router = require("./src/Routes/route");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect("mongodb://127.0.0.1:27017/user")
  .then(() => {
    console.log("MongoDB Successfully Connected...");
  })
  .catch((error)=>{
   console.log("error Occured in MongoDB",error);
});

app.use("/", router);

app.listen(3000, () => {
  console.log("Server Created Successfully at port:3000...");
});

module.exports = router;
