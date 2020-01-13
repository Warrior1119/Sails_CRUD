"use strict";

module.exports = {
  attributes: {
    name: {
      type: "string",
      required: true
    },

    description: {
      type: "string",
      required: true
    },

    price: {
      type: "number",
      required: true
    },

    quantity: {
      type: "number",
      required: true
    }
  }
};
