import { Sequelize } from 'sequelize';
import * as env from "dotenv";

// Inicializando env
env.config();

const sequelize = new Sequelize(
    process.env.DATABASE_HOST,
    process.env.DATABASE_USER,
    process.env.DATABASE_PASSWORD, {
    dialect: 'postgres',
    logging: null,
    define: {
        charset: 'utf-8',
        collate: 'utf8_general_ci'
    }
});

try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

export default sequelize;
