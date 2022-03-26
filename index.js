const express = require("express");
const app = express();
const pool = require("./database");
let port = process.env.PORT || 3000;

app.use(express.json());

app.get("/getCountries", (req, res) => {
    res.send("Hello World!");
 /*    try {
        const allCountries = await pool.query("SELECT * FROM countries");
        res.json(allCountries.rows);
    } catch (error) {
        console.error(error.message);
    } */
})


app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})