"use strict";
/** @module Order */

/** @function
  @name create - Create Order
  @memberof module:Order
  @desc Route - {@linkcode POST:/orders}
  @param {String} email
  @param {Number} date
  @param {Boolean} status
  @param {Array} inventory
  @returns Created - status 201
  @returns [Bad request]{@link Bad_request}
  @returns [Server error]{@link Server_error}
*/

module.exports = function create(req, res) {
  var data = req.body;

  if (!data.inventory)
    return res.error({ errCode: 404, message: "Inventory not found" });

  OrderService.create(data)
    .then(res.created)
    .catch(res.error);
};
