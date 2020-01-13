"use strict";

// Require our custom logger.
const winston = require("winston");
require("winston-daily-rotate-file");

module.exports = {
  blueprints: {
    shortcuts: false,
    actions: false,
    rest: false
  },

  custom: {
    // Define timestamps.
    timestamps: {
      tenMinutes: 10 * 60 * 1000,
      thirtyMinutes: 30 * 60 * 1000,
      day: 24 * 60 * 60 * 1000,
      week: 24 * 7 * 60 * 60 * 1000,
      month: 24 * 31 * 60 * 60 * 1000,
      year: 24 * 365 * 60 * 60 * 1000
    }
  },

  datastores: {
    default: {
      // Configure adapter.
      adapter: require("sails-mysql"),
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      host: process.env.MYSQL_HOST,
      port: process.env.MYSQL_PORT,
      database: process.env.MYSQL_DB
    }
  },

  hooks: {
    grunt: false,
    session: false,
    sockets: false,
    pubsub: false
  },

  http: {},

  models: {
    migrate: "safe"
  },

  security: {
    // Cross-Origin Resource Sharing.
    cors: {
      allRoutes: true,
      allowOrigins: "*",
      allowCredentials: false,
      allowRequestHeaders: "content-type,token"
    },

    // Cross-Site Request Forgery.
    csrf: false
  }
};
