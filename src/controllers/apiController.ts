import { Request, Response } from "express"
import * as TodoService from '../services/TodoService'


export const all = async (req:Request, res:Response) => {
    let todos = await TodoService.All();

    res.status(201).json({todos})
}

export const add = async (req:Request, res:Response) => {
    if(req.body.title){
        let title = req.body.title as string;
        let done = req.body.done.toLowerCase();

        if(done){
            
            switch(done){
                case 'true':
                case '1':
                    done = true;
                    break;
    
                case 'false':
                case '0':
                    done = false;
                    break;
                
            }

        }


        let newtodo = await TodoService.Add(title, done)

        if(newtodo instanceof Error){
            res.json({error:newtodo.message})
        }else{
            res.json({todo:newtodo});
        }
    }else{
        res.json({error:'Dados não enviados'})
    }
}

export const update = async (req:Request, res:Response) => {
    if(req.params.id){
        let id = Number(req.params.id) as number;
        let title = req.body.title as string;

        if(req.body.done){
            switch(req.body.done.toLowerCase()){
                case 'true':
                case '1':
                    req.body.done = true;
                    break;
    
                case 'false':
                case '0':
                    req.body.done = false;
                    break;
            }
        }

        let todo = await TodoService.Update(id, title, req.body.done);
    
        res.status(201).json({todo})
    }else{
        res.json({error:'Dados não enviados'})
    }
}


export const Delete =async (req:Request, res:Response) => {
    let id = Number(req.params.id);

    let todo = await TodoService.Delete(id);

    if(todo instanceof Error){
        res.json({error:todo.message})
    }else{
        res.status(201).json({message:'Dado deletado'})
    }
}