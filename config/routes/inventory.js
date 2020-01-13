"use strict";

module.exports.routes = {
  "POST /inventories": "inventory/create",
  "GET /inventories": "inventory/find",
  "GET /inventories/:id": "inventory/findOne",
  "PUT /inventories/:id": "inventory/update",
  "DELETE /inventories/:id": "inventory/destroy"
};
