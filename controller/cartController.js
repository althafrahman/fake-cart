// Require Model
const Cart = require('../model/cart');

const cart_index = (req, res) => {
    Cart.find()
        .then((cartItems) => {
            console.log("Cart items : ", cartItems);
            res.render('pages/cart/cart-list', { cartItems: cartItems })
        })
}


module.exports = {
    cart_index,
}