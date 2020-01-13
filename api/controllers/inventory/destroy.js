"use strict";
/** @function
  @name destroy - Destroy an Inventory
  @memberof module:Inventory
  @desc Route - {@linkcode DEL:/inventories/:id}
  @param {number} [id] - Id of inventory
  @returns No content - status 204
  @returns [Bad request]{@link Bad_request}
  @returns [Server error]{@link Server_error}
*/
module.exports = function findone(req, res) {
  const id = req.param("id");

  if (!id) return res.error(400);

  InventoryService.destroy(id)
    .then(res.noContent)
    .catch(res.error);
};
