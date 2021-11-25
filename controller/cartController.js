// Require Model
const Cart = require('../model/cart');

// Cart index Page
const cart_index = (req, res) => {
    Cart.find()
        .then((cartItems) => {
            console.log(cartItems);
            res.render('pages/cart/cart-list', { cartItems: cartItems })
        })
}

// Add to cart 
const cart_add_to_cart = (req, res) => {
    const cart = new Cart(req.body);

    cart.save()
        .then((result) => {
            console.log("Saved Successfully");
            res.json({ success: true });
        })
        .catch((err) => console.log(err));
}

// Delete Cart Item
const cart_delete_item = (req, res) => {
    const cartItemId = req.params.id;

    Cart.findByIdAndDelete(cartItemId)
        .then((result) => {
            console.log("Deleted Successfully");
            res.redirect('/cart');
        })
        .catch((err) => console.log(err))
}

module.exports = {
    cart_index,
    cart_add_to_cart,
    cart_delete_item,
}