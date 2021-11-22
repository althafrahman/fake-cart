// requiring Express
const express = require('express');

// require Mongoose
const mongoose = require('mongoose');

// 
const app = express();

// require view engine
app.set("view engine", "ejs");

// Setting dbUrl
const dbURL = 'mongodb+srv://admin:admin@cluster0.u6hsi.mongodb.net/fake-cart?retryWrites=true&w=majority';


mongoose.connect(dbURL, () => {
    app.listen(3300, () => {
        console.log("Listening to the port http://localhost:3300");
    });
});

app.get('/', (req, res) => {
    res.render('pages/product-list');
})


app.get('/product/create', (req, res) => {
    res.render('pages/products-form');
})