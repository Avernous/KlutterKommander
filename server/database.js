import 'dotenv/config';
import Sequelize from "sequelize";

const DB_KEY = process.env.SQL_KEY;
const DB_SECRET = process.env.SQL_SECRET;

const sequelize = new Sequelize(`mysql://${DB_KEY}:${DB_SECRET}@10.0.1.41:3306/Klutter_Kommander`)


export default sequelize;