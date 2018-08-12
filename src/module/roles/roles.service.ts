import { Injectable } from '@nestjs/common';
import { CreateRolesDto } from './interface/roles.dto';

@Injectable()
export class RolesService {
  create(body: CreateRolesDto): any {
    return body;
  }
}