const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json())

const siswaRoutes = require("./routes/siswaRoute")
const guruRoutes = require("./routes/guruRoute")

//api
app.use("/api/siswa", siswaRoutes)
app.use("/api/guruku", guruRoutes)

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
