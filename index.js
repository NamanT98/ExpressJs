import express from "express";
import {
  searchController,
  usernameController,
  userLogin,
  userSignup,
} from "./controller.js";
import router from "./route.js";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.get("/about", (req, res) => {
  res.send("This is about route");
});

app.get("/contact", (req, res) => {
  res.send("This is contact route");
});

// app.get("/user/:username", usernameController);
app.use("/user", router);
// Example: /search?keyword=express
app.get("/search", searchController);

app.listen(port, () => {
  console.log("Server is running on http://localhost:" + port);
});
