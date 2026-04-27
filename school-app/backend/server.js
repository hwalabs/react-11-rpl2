const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const app = express();
app.use(cors());
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "sekolah_db"
});
// app.get("/siswa", (req, res) => {
//     db.query("SELECT * FROM siswa", (err, result) => {
//         if (err) throw err;
//         res.json(result);
//     });
// });
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
