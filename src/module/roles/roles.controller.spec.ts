// import { Test, TestingModule } from '@nestjs/testing';
// import { RolesController } from './roles.controller';
// import { RolesService } from './roles.service';

// describe('RoleController', () => {
//   let app: TestingModule;

//   beforeAll(async () => {
//     app = await Test.createTestingModule({
//       controllers: [RolesController],
//       providers: [RolesService],
//     }).compile();
//   });

//   describe('createRole', () => {
//     it('should return the info of created role', () => {
//       const roleController = app.get<RolesController>(RolesController);
//       expect(roleController.create({ roleName: 'aaa', rank: '2' })).toBe({ id: '123', roleName: 'aaa', rank: '2' });
//     });
//   });

//   describe('updateRole', () => {
//     it('should return the info of updated role', () => {
//       const roleController = app.get<RolesController>(RolesController);
//       expect(roleController.root({ id: '123', roleName: 'bbb', rank: '1' })).toBe({ id: '123', roleName: 'bbb', rank: '1' });
//     });
//   });
// });
