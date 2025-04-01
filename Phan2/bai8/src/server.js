const express = require("express");
const mysql = require("mysql2");

const app = express();
const PORT = process.env.PORT || 3000;

// Cấu hình kết nối MySQL
const db = mysql.createConnection({
  host: "db",
  user: "root",
  password: "root",
  database: "testdb",
});

db.connect((err) => {
  if (err) {
    console.error("Không thể kết nối MySQL:", err);
  } else {
    console.log("Đã kết nối MySQL!");
  }
});

app.get("/", (req, res) => {
  res.send("Hello from Node.js with MySQL!");
});

app.get("/users", (req, res) => {
  db.query("SELECT * FROM users", (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(results);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
