//creating required path's and express
const express = require("express");
const path = require("path");
const app = express();
const PORT = 3001;
const fs = require("fs");
const db = require("./db/db.json");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
//setting up the servers needed
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/notes.html"));
});

app.get("/api/notes", (req, res) => {
  res.json(db);
});
//psoting the notes from 
const postNote = (body, notesArr) => {
  const newNote = body;
  body.id = notesArr.length;
  notesArr.push(newNote);

  fs.writeFileSync(
    path.join(__dirname, "./db/db.json"),
    JSON.stringify(notesArr)
  );
  return newNote;
};

app.post("/api/notes", (req, res) => {
    const newNote = postNote(req.body, db)
    res.json(true)
});

app.listen(PORT, () => {
  console.log("app is listening");
});
