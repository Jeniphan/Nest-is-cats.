import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { get } from 'http';
import { title } from 'process';
import { identity } from 'rxjs';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
    constructor(private todoService:TodoService){
    }

    @Get()
    getTodos(){
        return this.todoService.getTodo()
    }

    @Post()
    postTodo(@Body("id") id:string, @Body("title") title:string, @Body("subtitle") subtitle:string){
        this.todoService.addTodo(id,title,subtitle)
    }

    @Delete("/1/:id")
    deleteTodoById(@Param("id") id:string){
        console.log(`id: ${id}`)
        return this.todoService.removeTodoById(id)
    }
}
