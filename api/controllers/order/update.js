"use strict";
/** @module Order */

/** @function
  @name create - Create Order
  @memberof module:Order
  @desc Route - {@linkcode PUT /orders/:id}
  @param {Number} [id] - Id of an Order
  @param {Object} [data] - Data of Order that we want to update
  @returns Ok - status 200
  @returns [Bad request]{@link Bad_request}
  @returns [Server error]{@link Server_error}
*/

module.exports = function create(req, res) {
  const data = req.body;
  const id = req.param("id");

  OrderService.update(data, id)
    .then(res.ok)
    .catch(res.error);
};
