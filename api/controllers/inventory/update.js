"use strict";
/** @module Inventory */

/** @function
  @name create - Create Inventory
  @memberof module:Inventory
  @desc Route - {@linkcode PUT /inventories/:id}
  @param {Number} [id] - Id of an Inventory
  @param {Object} [data] - Data of Inventory that we want to update
  @returns Ok - status 200
  @returns [Bad request]{@link Bad_request}
  @returns [Server error]{@link Server_error}
*/

module.exports = function create(req, res) {
  const data = req.body;
  const id = req.param("id");

  if (data.description && data.description.length > 255) {
    return res.error({
      errCode: 400,
      message: "Description length can not be more than 255 chars"
    });
  }

  if (data.name && data.name.length > 45) {
    return res.error({
      errCode: 400,
      message: "Name length can not be more than 45 chars"
    });
  }

  InventoryService.update(data, id)
    .then(res.ok)
    .catch(res.error);
};
