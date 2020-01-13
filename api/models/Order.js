"use strict";

module.exports = {
  attributes: {
    inventory: {
      columnName: "inventory",
      type: "Number",
      required: true
    },
    email: {
      type: "string",
      required: true
    },
    date: {
      type: "number",
      defaultsTo: new Date().getTime() + sails.config.custom.timestamps.year
    },
    status: {
      type: "boolean",
      defaultsTo: false
    }
  }
};
