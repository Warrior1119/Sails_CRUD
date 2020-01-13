# Treez Test Task

## Environment

    This is Sails.js project so if you don't have sails environment, you can simply setup by following this guide.
    https://sailsjs.com/get-started

    - Node.js 10.17.0
    - Mysql version 8.0.18

## Setup Project

    - npm install
    - npm start

## Mysql Setup

    First, you need to create a mysql database - `treez_development`.
    There are `treez_development_inventory.sql` and `treez_development_order.sql` files in this project. You can migrate this file to backup tables.

    To connect database you need to create or edit .env.development for mysql configuration.

    MYSQL_USER=your user
    MYSQL_PASSWORD=your password
    MYSQL_HOST=127.0.0.1
    MYSQL_PORT=3306
    MYSQL_DB=treez_development

    And edit the `config/datastores.js` file by changing the username and password, etc
        url: "mysql://root:password@localhost:3306/treez_development"

## Endpoint

    - Create inventory item
        POST http://localhost:3000/inventories
    - Read all inventory items
        GET http://localhost:3000/inventories
    - Read single inventory item
        GET http://localhost:3000/inventories/1
    - Update inventory item
        PUT http://localhost:3000/inventories/1
    - Delete inventory item
        DELETE http://localhost:3000/inventories/1
    - Create order
        POST http://localhost:3000/orders
    - Read all orders
        GET http://localhost:3000/orders
    - Read single order
        GET http://localhost:3000/orders/1
    - Update order
        PUT http://localhost:3000/orders/1
    - Delete order
        DELETE http://localhost:3000/orders/1
