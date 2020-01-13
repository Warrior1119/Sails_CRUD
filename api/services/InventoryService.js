"use strict";

module.exports = {
  create(data) {
    return new Promise((resolve, reject) => {
      Inventory.create(data)
        .meta({ fetch: true })
        .then(resolve)
        .catch(err => {
          sails.log.error(err);
          return reject();
        });
    });
  },

  find() {
    return new Promise((resolve, reject) => {
      Inventory.find({})
        .sort("id DESC")
        .populateAll()
        .then(resolve)
        .catch(err => {
          sails.log.error(err);
          return reject();
        });
    });
  },

  findOne(id) {
    return new Promise((resolve, reject) => {
      Inventory.findOne({ id: id })
        .then(res => {
          if (!res) return reject(404);

          return resolve(res);
        })
        .catch(err => {
          sails.log.error(err);
          return reject();
        });
    });
  },

  destroy(id) {
    return new Promise((resolve, reject) => {
      Inventory.destroy({ id: id })
        .then(resolve)
        .catch(err => {
          sails.log.error(err);
          return reject();
        });
    });
  },

  update(data, id) {
    return new Promise((resolve, reject) => {
      /** 
        Check if inventory with this code exist 
      */
      Inventory.findOne({ id: id })
        .then(_inventory => {
          if (!_inventory) return reject(404);

          Inventory.update({ id: id })
            .set(data)
            .meta({ fetch: true })
            .then(resolve)
            .catch(reject);
        })
        .catch(err => {
          sails.log.error(err);
          return reject();
        });
    });
  },

  addByOrder(id) {
    return new Promise((resolve, reject) => {
      Inventory.findOne({ id: id })
        .then(_inventory => {
          var data = {};
          data.quantity = _inventory.quantity + 1;
          Inventory.update({ id: id })
            .set(data)
            .meta({ fetch: true })
            .then(resolve)
            .catch(reject);
        })
        .catch(err => {
          sails.log.error(err);
          return reject();
        });
    });
  },

  removeByOrder(id) {
    return new Promise((resolve, reject) => {
      Inventory.findOne({ id: id })
        .then(_inventory => {
          var data = {};
          data.quantity = _inventory.quantity - 1;
          Inventory.update({ id: id })
            .set(data)
            .meta({ fetch: true })
            .then(resolve)
            .catch(reject);
        })
        .catch(err => {
          sails.log.error(err);
          return reject();
        });
    });
  }
};
