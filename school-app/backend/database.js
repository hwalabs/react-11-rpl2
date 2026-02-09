import mysql from 'mysql';

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "sekolah"
})
db.connect((err) => {
    if (err) throw err; //melihat error
    console.log("Database Connected!");
})