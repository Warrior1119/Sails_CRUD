"use strict";

module.exports.routes = {
  "POST /orders": "order/create",
  "GET /orders": "order/find",
  "GET /orders/:id": "order/findOne",
  "PUT /orders/:id": "order/update",
  "DELETE /orders/:id": "order/destroy"
};
