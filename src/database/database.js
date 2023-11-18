import Sequelize from "sequelize";

export  const sequelize = new Sequelize ("clinica", "postgres", "k3epDr43MiNg", {
    host:"localhost",
    dialect:"postgres",
});