import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { get } from 'http';
import { title } from 'process';
import { identity } from 'rxjs';

@Controller('todo')
export class TodoController {

    @Get()
    getTodos(): string {
        return 'This my cat';
    }

    @Post()
    postTodo(@Body("title") title:string, @Body("subtitle") subtitle:string){
        console.log(`title: ${title}, subtitel: ${subtitle}`)
        return 'success'
    }

    @Get("/1/:id")
    getTodo2(@Param("id")id:string){
        console.log(`id: ${id}`)
        return `id is ${id}`
    }
}

