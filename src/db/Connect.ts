import sequelize from '../instances/pg'
import { Request, Response, NextFunction } from 'express'
import Todo from '../models/Todo';

export const connectDB = async (req:Request, res:Response, next:NextFunction) => {
    try {
        await sequelize.authenticate();
        Todo.sync();
        console.log('Connection has been established successfully.');
        next();
    } catch (error) {
        res.status(400).json({error:'Erro na conexão com o banco'});
        console.error('Unable to connect to the database:', error);

    }
}