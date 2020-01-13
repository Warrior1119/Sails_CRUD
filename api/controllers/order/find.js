"use strict";
/** @function
  @name find - Find Orders
  @memberof module:Inventory
  @desc Route - {@linkcode GET:/orders}
  @returns Find - status 200 with content
  @returns [Server error]{@link Server_error}
*/
module.exports = function find(req, res) {
  OrderService.find()
    .then(res.ok)
    .catch(res.error);
};
