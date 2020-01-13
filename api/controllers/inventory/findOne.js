"use strict";
/** @function
  @name findOne - find one inventory
  @memberof module:Inventory
  @desc Route - {@linkcode GET:/inventories/:id}
  @param {number} [id]- Id of inventory
  @returns OK - status 200
  @returns [Bad request]{@link Bad_request}
  @returns [Not found]{@link Not_found}
  @returns [Server error]{@link Server_error}
*/
module.exports = function findone(req, res) {
  const id = req.param("id");
  if (isNaN(id))
    return res.error({ errCode: 400, message: "Id should be number" });
  InventoryService.findOne(id)
    .then(res.ok)
    .catch(res.error);
};
