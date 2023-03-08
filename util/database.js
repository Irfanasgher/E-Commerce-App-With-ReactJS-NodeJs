// const mysql = require("mysql2");

// const pool = mysql.createPool({
//   host: "192.168.56.56",
//   user: "homestead",
//   database: "node-complete",
//   password: "secret",
// });

// module.exports = pool.promise();

const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "homestead", "secret", {
  dialect: "mysql",
  host: "192.168.56.56",
});

module.exports = sequelize;
