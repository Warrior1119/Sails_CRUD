"use strict";

module.exports = {
  create(data) {
    return new Promise((resolve, reject) => {
      Inventory.findOne({ id: data.inventory })
        .then(_inventory => {
          if (_inventory.quantity <= 0)
            return reject({ errCode: 404, message: "Inventory is not exist" });
          Order.create(data)
            .meta({ fetch: true })
            .then(_order => {
              InventoryService.addByOrder(data.inventory)
                .then(resolve)
                .catch(reject);
              return resolve(_order);
            })
            .catch(reject);
        })
        .catch(err => {
          sails.log.error(err);
          return reject();
        });
    });
  },

  find() {
    return new Promise((resolve, reject) => {
      Order.find({})
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
      Order.findOne({ id: id })
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
      Order.findOne({ id: id })
        .then(_order => {
          InventoryService.removeByOrder(_order.inventory)
            .then(_res => {
              Order.destroy({ id: id })
                .then(resolve)
                .catch(err => {
                  sails.log.error(err);
                  return reject();
                });
            })
            .catch(reject);
        })
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
      Order.findOne({ id: id })
        .then(_order => {
          if (!_order) return reject(404);

          if (data.inventory) {
            var originalInventory = _order.inventory;
            InventoryService.addByOrder(originalInventory)
              .then(resolve)
              .catch(reject);

            InventoryService.removeByOrder(data.inventory)
              .then(resolve)
              .catch(reject);
          }
          Order.update({ id: id })
            .set(data)
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
