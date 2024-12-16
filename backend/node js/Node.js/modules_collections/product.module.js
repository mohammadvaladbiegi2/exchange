const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        require: [true, "Title product is require"]
    },
    price: {
        type: Number,
        require: [true, "Price product is require"]
    },
    isAvailable: {
        type: Boolean,
        require: [false, "Default is false "],
        default: false
    },

}, {
    timestamps: true
})


const ProductModule = mongoose.model("Product", ProductSchema)

module.exports = ProductModule