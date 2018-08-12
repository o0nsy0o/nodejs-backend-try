import { Test, TestingModule } from '@nestjs/testing';
import { RoleController } from './roles.controller';
import { RoleService } from './roles.service';

describe('RoleController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [RoleController],
      providers: [RoleService],
    }).compile();
  });

  describe('createRole', () => {
    it('should return the info of created role', () => {
      const roleController = app.get<RoleController>(RoleController);
      expect(roleController.create({ roleName: 'aaa', rank: '2' })).toBe({ id: '123', roleName: 'aaa', rank: '2' });
    });
  });

  describe('updateRole', () => {
    it('should return the info of updated role', () => {
      const roleController = app.get<RoleController>(RoleController);
      expect(roleController.root({ id: '123', roleName: 'bbb', rank: '1' })).toBe({ id: '123', roleName: 'bbb', rank: '1' });
    });
  });
});
