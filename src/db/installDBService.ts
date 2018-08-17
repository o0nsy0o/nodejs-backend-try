import { Service, Inject } from 'typedi';
import { Connection } from 'typeorm';
import { Role } from '../module/roles/roles.entity';
import { RoleType } from '../constants/RoleType';
// import { User } from '../../models/User';
import { RolesService } from 'module/roles/roles.service';
import { UsersService } from '../module/roles/users.service';
// import { UserType } from '../../constants/UserType';
// import { ThirdApp } from '../../models/ThirdApp';
// import { ThirdAppService } from '../thirdapp/ThirdAppService';

@Service()
export class InstallDBService {
  @Inject()
  private rolesService: RolesService;

  @Inject()
  private usersService: UsersService;

  public async insertRoles(connection: Connection) {
    const values: Role[] = [];
    let role = new Role();
    role.active = true;
    role.systemRole = true;
    role.name = RoleType[RoleType.Administrator];
    values.push(role);
    role = new Role();
    role.active = true;
    role.systemRole = true;
    role.name = RoleType[RoleType.Authenticated];
    values.push(role);
    role = new Role();
    role.active = true;
    role.systemRole = true;
    role.name = RoleType[RoleType.Public];
    values.push(role);
    return await connection
      .getRepository(Role)
      .createQueryBuilder()
      .insert()
      .values(values)
      .execute();
  }

  public async insertAdmin() {
    const admin = new User();
    admin.username = 'tianyingchun';
    admin.email = 'tianyingchun@outlook.com';
    admin.password = '123456';
    admin.displayName = '田迎春';
    admin.userType = UserType.UserPass;
    this.userService.transformUser(admin);
    return await this.userService.insert(admin);
  }

  public async insertThirdApp() {
    const thirdApp = new ThirdApp();
    thirdApp.appId = 'oss-acl';
    thirdApp.appSecret = 'TcSO6NQF1q';
    thirdApp.description = 'oss acl admin platform';
    await this.thirdAppService.insert(thirdApp);
  }

  public async start(connection: Connection) {
    await this.insertThirdApp();
    await this.insertRoles(connection);
    const admin = await this.insertAdmin();
    admin.roles = await this.roleService.findAllRole();
    // save many-to-many relations.
    await connection.manager.save(admin);
  }
}
