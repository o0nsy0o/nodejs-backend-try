// tslint:disable:no-console
import { Controller, Body, Post } from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRolesDto } from './interface/roles.dto';

@Controller('me')
export class RolesController {
  constructor(private readonly roleService: RolesService) { }

  @Post('create')
  async create(@Body() body: CreateRolesDto): Promise<any> {
    if (body.name) {
      console.log('need the name of role.');
      return;
    }
    const result = await this.roleService.create(body);
    return result;
  }

  @Post('findAll')
  async findAll(): Promise<any> {
    return '';
  }

}
