import moment, { Moment } from 'moment';
type IUnit = 'seconds' | 'minutes' | 'hours' | 'days' | 'weeks' | 'months' | 'years';

export class Time {
  // 时区东八区
  private m: Moment;
  constructor(date: Date | number | string = new Date()) {
    this.m = moment(date).utcOffset('+08:00');
  }

  public add(duration: number, unit: IUnit = 'seconds') {
    return this.m.clone().add(duration, unit);
  }

  public subtract(duration: number, unit: IUnit = 'seconds') {
    return this.m.clone().subtract(duration, unit);
  }

  public isBefore(date: Date | string | number) {
    return this.m.clone().isBefore(moment(date));
  }

  public isAfter(date: Date | string | number) {
    return this.m.clone().isAfter(moment(date));
  }

  public toTimestamp(): string {
    return this.m.clone().format('x');
  }

  public toFormatString(format: string = 'YYYY-MM-DD HH:mm:ss'): string {
    return this.m.clone().format(format);
  }
}
