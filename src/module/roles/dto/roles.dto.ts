import { Length, IsString, IsBoolean, IsNumber } from 'class-validator';

export class CreateRoleDto {
  @IsString()
  @Length(1, 50)
  public roleName: string = '';

  @IsBoolean()
  public active: string = '';

  @IsNumber()
  public roleGrade: string = '';
}

export class UpdateRoleDto {
  public id: string = '';

  @IsString()
  @Length(1, 50)
  public roleName: string = '';

  @IsBoolean()
  public active: string = '';

  @IsNumber()
  public roleGrade: string = '';
}

export class DeleteRoleDto{
  public id: string = '';
}