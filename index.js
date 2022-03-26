const express = require("express");
const app = express();
const pool = require("./database");
const mockData = require("./mockData.json");
let port = process.env.PORT || 3000;

app.use(express.json());

app.get("/getCountries", (req, res) => {
    res.send(mockData);
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