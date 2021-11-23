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
router.get('/', productController.product_index)


// Get create form (product Create Form)
router.get('/create', productController.product_create_get)


// While posting Data(new Data) submittion(POST)
router.post('/create', productController.product_create_post);


// View the created Product
router.get('/view/:id', productController.product_view_get);


// Edit product
router.get('/edit/:id', productController.product_edit_get);


// delete the product
router.delete('/delete/:id', productController.product_delete_delete);

module.exports = router;