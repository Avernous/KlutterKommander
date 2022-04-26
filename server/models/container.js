import { Sequelize, DataTypes } from 'sequelize';
import database from '../database.js';

const Container = database.define('container', 
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
        parentContainerId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: true
        },
    },
    {paranoid: true}, 
    
    );

export default Container;