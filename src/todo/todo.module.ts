import { Controller, Module } from '@nestjs/common';
import { TodoController} from './todo.controller';

@Module({
  controllers: [TodoController]
})
export class TodoModule {}
