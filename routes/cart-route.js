// **************************
// Declarations
// 


// Requiring express
const express = require('express');
// express Router
const router = express.Router();
// require product Controller
const cartController = require('../controller/cartController');

// 
// Declaration ends here
// ****************************************


// get products HOME-PAGE
router.get('/', cartController.cart_index)


// Post cart data form 
router.post('/add-to-cart', cartController.cart_add_to_cart);


// // View the created Product
// router.get('/view/:id', productController.product_view_get);


// // Edit product
// router.get('/edit/:id', productController.product_edit_get);


// delete the cart item by id
router.delete('/delete/:id', cartController.cart_delete_item);

module.exports = router;