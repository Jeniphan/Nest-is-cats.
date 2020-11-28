import { Injectable, NotFoundException } from '@nestjs/common';
import { randomInt } from 'crypto';
import { Todo } from './todo.entity';

@Injectable()
export class TodoService {

    todoArry:Todo[] = []

    addTodo(id:string, title:string, subtitle:string){
        console.log(`id: ${id}, title: ${title}, subtitel: ${subtitle}`)

        const todo = new Todo();

        todo.id = id;
        todo.title = title;
        todo.subtitle = subtitle;

        this.todoArry.push(todo)
    }

    getTodo(){
        return this.todoArry
    }

    removeTodoById(id:string){

        const found = this.todoArry.find(item=> item.id === id)
        if (!found){
            throw new NotFoundException(`Todo with ${id} not found`)
        }

        this.todoArry = this.todoArry.filter(item=>{return item.id !== id})
        return this.todoArry
    }
}
