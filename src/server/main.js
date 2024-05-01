import express from "express";
import ViteExpress from "vite-express";
import { insertUser, displayAll, getUsersInfo } from "./db.js";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

app.post("/client", (req, res) => {
  console.log("++++++SERVER RECEIVED PATIENT DETIALS. INSERTING DETAILS IN DB ++++++++++=");
  console.log(req.body,"=====================================");
  insertUser(req.body);
  res.redirect("/admin");
});

app.post("/users", async (_, res) => {
  const users = await getUsersInfo();
  res.send(JSON.stringify(users));
});

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000...")
);

// displayAll();
