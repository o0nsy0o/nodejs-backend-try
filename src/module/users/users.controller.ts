// tslint:disable:no-console
import { Controller, Body, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUsersDto } from './interface/users.dto';

@Controller('me')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post('create')
  async create(@Body() body: CreateUsersDto): Promise<any> {
    if (body.name) {
      console.log('need the name of role.');
      return;
    }
    const result = await this.usersService.create(body);
    return result;
  }

  @Post('findAll')
  async findAll(): Promise<any> {
    return '';
  }

}
