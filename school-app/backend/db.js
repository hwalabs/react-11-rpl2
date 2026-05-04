const mysql = require("mysql2")

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "sekolah"
});

db.connect((err) => {
    if(err){
        console.log("Koneksi Gagal")
    } else {
        console.log("koneksi Berhasil")
    }
})

module.exports = db;