"use strict";
/** @module Inventory */

/** @function
  @name create - Create Inventory
  @memberof module:Inventory
  @desc Route - {@linkcode POST:/inventories}
  @param {String} name 
  @param {String} description - Max 255 characters
  @param {Number} price
  @param {Number} quantity
  @returns Created - status 201
  @returns [Bad request]{@link Bad_request}
  @returns [Server error]{@link Server_error}
*/

module.exports = function create(req, res) {
  const data = req.body;
  if (data.description.length > 255) {
    return res.error({
      errCode: 400,
      message: "Description length can not be more than 255 chars"
    });
  }

  if (data.name.length > 45) {
    return res.error({
      errCode: 400,
      message: "Name length can not be more than 45 chars"
    });
  }

  if (!data.name || !data.description || !data.price || !data.quantity) {
    return res.error({
      errCode: 400,
      message: "Inventory information is not enough. Please check again"
    });
  }

  InventoryService.create(data)
    .then(res.created)
    .catch(res.error);
};
