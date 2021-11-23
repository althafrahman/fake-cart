// Requiring the Products Model
const Products = require('../model/product')


// products Listing(Index)
const product_index = (req, res) => {
    Products.find()
        .then((result) => {
            res.render('pages/product-list', { products: result });
        })
        .catch((err) => console.log(err))

}

// prducts Create form
const product_create_get = (req, res) => {
    res.render('pages/products-form', { product: null, mode: 'create' });
}

// product Create Post data
const product_create_post = (req, res) => {

    // getting data from product form
    const products = new Products(req.body);

    // If mode is edit then update else create new product
    if (req.body.mode == 'edit') {
        Products.findOneAndUpdate({ id: products.id }, {
                title: products.title,
                description: products.description,
                price: products.price,
                image: products.image
            })
            .then((result) => {
                console.log("Updated Successfully");
                res.redirect('/product');
            })
            .catch((err) => console.log(err))

    } else {
        products.save()
            .then((result) => {
                console.log("Saved Successfully");
                res.redirect('/product');
            })
            .catch((err) => console.log(err))
    }

}


// view Product Selected
const product_view_get = (req, res) => {
    const productId = req.params.id;
    Products.findById(productId)
        .then((product) => {
            res.render('pages/product-details', { product: product })
        })
        .catch((err) => console.log(err))
}

// Edit Product Selected
const product_edit_get = (req, res) => {
    const productId = req.params.id;
    Products.findById(productId)
        .then((product) => {
            res.render('pages/products-form', { product: product, mode: 'edit' })
        })
        .catch((err) => console.log(err))
}

// Delete product Selected
const product_delete_delete = (req, res) => {
    const productId = req.params.id;

    Products.findByIdAndDelete(productId)
        .then((result) => {
            console.log("Deleted Successfully");
            res.redirect('/product');
        })
        .catch((err) => console.log(err))
}


// export Functions
module.exports = {
    product_index,
    product_create_get,
    product_create_post,
    product_view_get,
    product_edit_get,
    product_delete_delete
}