
var orderSchema = require('../schemas/order');
var mongoose = require('mongoose');
var Order = mongoose.model('Order', orderSchema);
module.exports = Order;
