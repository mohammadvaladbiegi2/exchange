
const express = require("express")
const app = express()
const { connectToDatabase } = require("./DB/connectToDatabase")
const productRoutes = require("./routes/productRoutes")
const verifyToken = (req, res, next) => {
    const token = req.headers["authorization"];


    if (!token) {
        return res.status(401).json({ message: "No token provided. Access denied." });
    } else {
        next()
    }


};

app.use(express.json())

app.use("/products", verifyToken, productRoutes);




app.listen(1000, () => {
    connectToDatabase()
    console.log("server run on port 1000");

})