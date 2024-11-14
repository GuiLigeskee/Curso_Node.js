const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("nodesequelize", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

try {
  sequelize.authenticate();
  console.log("conectamos com sucesso o sequelize!");
} catch (err) {
  console.log("Não foi possível conectar: ", err);
}

module.exports = sequelize;
