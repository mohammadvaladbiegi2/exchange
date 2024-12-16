const express = require("express");
const ProductModule = require("../modules_collections/product.module");


const product = express.Router()


product.get("/", async (req, res) => {
    try {
        const { limit, page } = req.query;

        const resulte = await ProductModule.find().limit(+limit).skip((page - 1) * limit)
        return res.status(200).json(resulte)

    } catch (error) {
        return res.status(500).json(`Error is ===> ${error}`)
    }

})

product.post("/create", async (req, res) => {

    try {
        const Newproduct = req.body


        const resulte = await ProductModule.create(Newproduct)
        return res.status(201).json(resulte)

    } catch (error) {
        return res.status(500).json(`Error is ===> ${error}`)
    }

})


product.delete("/delete/:id", async (req, res) => {
    try {
        const productId = req.params.id;
        console.log(productId);


        const deletedProduct = await ProductModule.findByIdAndDelete(productId);

        if (!deletedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }

        return res.status(200).json({
            message: "Product deleted successfully",
            product: deletedProduct,
        });
    } catch (error) {
        return res.status(500).json({ error: `Error is ===> ${error.message}` });
    }
});

module.exports = product