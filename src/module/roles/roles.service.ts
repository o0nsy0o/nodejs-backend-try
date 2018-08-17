import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRoleDto, UpdateRoleDto, DeleteRoleDto } from './dto/roles.dto';
// import { CreateRolesDto } from './interface/roles.dto';
import { Roles } from './roles.entity';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Roles)
    private readonly rolesRepository: Repository<Roles>,
  ) {}

  public async delete(id: DeleteRoleDto) {
    // await this.rolesRepository.delete();
  }

  create(body: CreateRoleDto): any {
    return body;
  }

  update(body: UpdateRoleDto): any {
    return body;
  }
}
