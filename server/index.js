import 'dotenv/config';
import express from "express";
import bodyParser from "body-parser";
//import Sequelize from "sequelize";
import cors from 'cors';

import sequelize from '../server/database.js'
import Containers from '../server/models/container.js';
import Items from '../server/models/item.js';


import router from '../server/routes/router.js';
import { seeder } from './seeders/seeder.js';


const app = express();

app.use('/', router);

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const PORT = process.env.PORT;

try {
    Containers.hasMany(Items);
    Items.belongsTo(Containers);
    await sequelize.authenticate();
    await sequelize.sync({ force: true });
    seeder();
    console.log('Connection has been established successfully.');
    app.listen(PORT, ()=> console.log(`Server running on ${PORT}`));
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

