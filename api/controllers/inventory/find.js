"use strict";
/** @function
  @name find - Find Inventories
  @memberof module:Inventory
  @desc Route - {@linkcode GET:/inventories}
  @returns Find - status 200 with content
  @returns [Server error]{@link Server_error}
*/
module.exports = function find(req, res) {
  InventoryService.find()
    .then(res.ok)
    .catch(res.error);
};
