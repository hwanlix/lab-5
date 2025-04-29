const Product = require('../models/Product');
const Cart = require('../models/cart');
const statusCode = require('../constants/statusCode');

const cartController = {
  addProductToCart: (req, res) => {
    const { name } = req.body;

    try {

      Cart.add(name);

      req.session.cartCount = req.session.cart ? req.session.cart.length : 0;

      res.redirect(302, '/products/new');
    } catch (err) {
      res.status(statusCode.NOT_FOUND).send(err.message);
    }
  },

  getProductsCount: (req, res) => {
    const count = Cart.getProductsQuantity();
    res.status(statusCode.OK).json({ count });
  }
};

module.exports = cartController;
