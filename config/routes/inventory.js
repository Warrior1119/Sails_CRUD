"use strict";

module.exports.routes = {
  "POST /inventories": "inventory/create",
  "GET /inventories": "inventory/find",
  "GET /inventory/:id": "inventory/findOne",
  "PUT /inventories/:id": "inventory/update",
  "DELETE /inventory/:id": "inventory/delete"
};
