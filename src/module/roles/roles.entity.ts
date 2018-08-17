import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../../db/base.entity.class';

@Entity()
export class Roles extends BaseEntity {
  @Column({ type: 'varchar', length: 100 })
  public RoleName: string;

  @Column({ type: 'varchar', length: 50 })
  public active: boolean;

  @Column({ type: 'int', length: 100 })
  public roleGrade: number;
}
