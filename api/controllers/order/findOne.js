"use strict";
/** @function
  @name findOne - find one order
  @memberof module:Order
  @desc Route - {@linkcode GET:/orders/:id}
  @param {number} [id] - Id of order
  @returns OK - status 200
  @returns [Bad request]{@link Bad_request}
  @returns [Not found]{@link Not_found}
  @returns [Server error]{@link Server_error}
*/
module.exports = function findone(req, res) {
  const id = req.param("id");
  if (isNaN(id))
    return res.error({ errCode: 400, message: "Id should be number" });
  OrderService.findOne(id)
    .then(res.ok)
    .catch(res.error);
};
