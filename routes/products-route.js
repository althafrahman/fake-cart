// **************************
// Declarations
// 


// Requiring express
const express = require('express');
// express Router
const router = express.Router();
// require product Controller
const productController = require('../controller/productController');

// 
// Declaration ends here
// ****************************************


// get products HOME-PAGE
router.get('/product', productController.product_index)


// Get create form (product Create Form)
router.get('/product/create', productController.product_create_get)


// While posting Data(new Data) submittion(POST)
router.post('/product/create', productController.product_create_post);


// View the created Product
router.get('/product/view/:id', productController.product_view_get);


// Edit product
router.get('/product/edit/:id', productController.product_edit_get);


// delete the product
router.delete('/product/delete/:id', productController.product_delete_delete);

module.exports = router;