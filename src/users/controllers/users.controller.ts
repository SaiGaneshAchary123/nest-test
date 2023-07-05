import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Delete,
  ParseIntPipe,
  ValidationPipe,
} from '@nestjs/common';
import { UsersServices } from '../services/users.service';
import { UserDTO } from '../dto/user.dto';
@Controller('users')
export class UsersController {
  constructor(private readonly userServices: UsersServices) {}

  @Post()
  createUser(@Body(ValidationPipe) data: UserDTO) {
    return this.userServices.createUser(data);
  }

  @Get()
  getUsers() {
    return this.userServices.getUsers();
  }

  @Put('/:id')
  updateUser(@Param('id') id: string, @Body() data: UserDTO) {
    return this.userServices.updateUser(id, data);
  }

  @Get('/:id')
  getUser(@Param('id') id: string) {
    return this.userServices.getUser(id);
  }

  @Delete('/:id')
  deleteUser(@Param('id') id: string) {
    return this.userServices.deleteUser(id);
  }
}
