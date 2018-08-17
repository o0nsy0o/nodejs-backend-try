import { Injectable } from '@nestjs/common';
import { CreateUsersDto } from './interface/users.dto';

@Injectable()
export class UsersService {
  create(body: CreateUsersDto): any {
    return body;
  }
}