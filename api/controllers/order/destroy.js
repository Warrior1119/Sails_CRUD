"use strict";
/** @function
  @name destroy - Destroy an Order
  @memberof module:Order
  @desc Route - {@linkcode DEL:/orders/:id}
  @param {number} [id] - Id of Order
  @returns No content - status 204
  @returns [Bad request]{@link Bad_request}
  @returns [Server error]{@link Server_error}
*/
module.exports = function findone(req, res) {
  const id = req.param("id");

  if (!id) return res.error(400);

  OrderService.destroy(id)
    .then(res.noContent)
    .catch(res.error);
};
