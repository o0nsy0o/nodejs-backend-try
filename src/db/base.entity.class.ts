import { includes, has, set, get, forEach } from 'lodash';
import { Column, PrimaryGeneratedColumn, BeforeUpdate } from 'typeorm';
import { Matches } from 'class-validator';
import { IObjectType } from '../types/IObjectType';
import { Time } from '../utils/time';
import { deepForEach } from '../utils/deep-foreach';

export abstract class BaseEntity {

  @PrimaryGeneratedColumn()
  public id: number = 0;

  @Column('datetime', { name: 'created_at' })
  @Matches(/\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}/, { message: '`createdAt` format is `YYYY-MM-DD HH:mm:ss`' })
  public createdAt: string;

  @Column('datetime', { name: 'updated_at' })
  @Matches(/\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}/, { message: '`updatedAt` format is `YYYY-MM-DD HH:mm:ss`' })
  public updatedAt: string;

  @BeforeUpdate()
  private updateDates() {
    this.updatedAt = new Time().toFormatString();
  }

  constructor() {
    const now = new Date();
    this.createdAt = new Time(now).toFormatString();
    this.updatedAt = new Time(now).toFormatString();
  }

  public toJSON<T extends keyof this>(fieldsPath: T[] = [], ignoreEmptyField: boolean = true, converter = (value, key) => value) {
    const result = {};
    const flag = fieldsPath.length > 0;
    forEach(this, (value, key) => {
      if (!flag) {
        if (value || !ignoreEmptyField) {
          set(result, key, converter(value, key));
        }
      } else if (includes(fieldsPath as string[], key)) {
        if (value || !ignoreEmptyField) {
          set(result, key, converter(value, key));
        }
      }
    });
    return result;
  }

  public toModel<T, K extends keyof T>(type: IObjectType<T>, ignoreFields: string[] = [], mapping: { [P in keyof this]?: K } = {}): T {
    const model = new type();
    deepForEach(this, (value, keyPath) => {
      if (!includes(ignoreFields, keyPath)) {
        if (has(model, keyPath)) {
          set(model as any, keyPath, value);
        }
        const mapToKey = get(mapping, keyPath);
        if (has(model, mapToKey)) {
          set(model as any, mapToKey, value);
        }
      }
    });
    return model;
  }
}
