import sequelize from 'sequelize';
import { dbConfig } from "./config";

export default new sequelize(dbConfig.dbName, dbConfig.user, dbConfig.pass, {
    host: dbConfig.host,
    dialect: 'mysql',
    operatorsAliases: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})
