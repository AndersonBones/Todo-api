import Todo from "../models/Todo";

export const All = async () => {
    return await Todo.findAll();
}

export const Add = async (title:string, done:boolean)=>{
    if(title){
        let newtodo = await Todo.create({title, done});
        return newtodo;
    }else{
        return new Error('Dados incorretos');
    }
    
}

export const Update = async (id:number, title:string, done:boolean) => {
    let hasData = await Todo.findByPk(id);

    if(hasData){
        hasData.title = title;
        hasData.done = done;

        return await hasData.save();

    }else{
        return new Error('Houve um erro na atualização da tarefa')
    }
}

export const Delete = async (id:number) => {
    let hasData = await Todo.findByPk(id);

    if(hasData){
        hasData.destroy();
        return;
    }else{
        return new Error('Houver um erro na remoção da tarefa')
    }
}