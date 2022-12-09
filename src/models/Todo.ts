import sequelize from '../instances/pg'
import {Model, DataTypes} from 'sequelize'


export interface Todo extends Model{
    id:number,
    title:string,
    done:boolean
}

const todo = sequelize.define<Todo>('todo', {
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    title:{
        type:DataTypes.STRING,
    },
    done:{
        defaultValue:false,
        type:DataTypes.BOOLEAN
    }
},{timestamps:false})

export default todo;
