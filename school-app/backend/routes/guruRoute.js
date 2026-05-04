const express = (require("express"))
const router = express.Router()

const guru = require("../controllers/guruController")

router.get("/", guru.guruku)
module.exports = router