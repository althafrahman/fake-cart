// ******************************************
// Declaration Starts Here
// 


// requiring Express
const express = require('express');
// require Mongoose
const mongoose = require('mongoose');
// require products route
const productsRoute = require('./routes/products-route');
// Using express
const app = express();
// Setting Static (Public)
app.use(express.static('public'));
// require view engine
app.set("view engine", "ejs");
// use 
app.use(express.urlencoded({ extended: true }));
// Setting dbUrl
const dbURL = 'mongodb+srv://admin:admin@cluster0.u6hsi.mongodb.net/fake-cart?retryWrites=true&w=majority';

// 
// Decaration ends here
// *****************************************


// connect with mongodb atlas
mongoose.connect(dbURL, () => {
    app.listen(3300, () => {
        console.log("Listening to the port http://localhost:3300");
    });
});

// root
app.get('/', (req, res) => {
    res.redirect('/product');
})


// **********************************
// product List Routes
// 

app.use(productsRoute);

// 
// Product route ends here
// ***************************************