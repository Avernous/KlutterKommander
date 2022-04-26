import { Sequelize, DataTypes } from 'sequelize';
import database from '../database.js';

const Item = database.define('item', 
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        description: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        brand: {
            type: DataTypes.STRING(100),
            allowNull: true
        },
        color: {
            type: DataTypes.STRING(50),
            allowNull: true
        }
    },
    {paranoid: true}
);

export default Item;