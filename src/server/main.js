import express from "express";
import ViteExpress from "vite-express";
import { insertUser, displayAll, getUsersInfo } from "./db.js";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());
app.get("/hello", (req, res) => {
  res.send("Hello Vite + React!");
});

app.post("/client", (req, res) => {
  console.log("++++++++++++++++++++++++++++++HELOWO+++++++++++++++++++++++++=");
  console.log(req.body);
  insertUser(req.body);
  setTimeout(() => {
    res.redirect("/admin");
  }, 3000);
});

app.post("/users", async (req, res) => {
  const users = await getUsersInfo();
    res.send(JSON.stringify(users));
});

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000...")
);

// displayAll();
