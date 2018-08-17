import { createConnection, Connection } from 'typeorm';
import { join } from 'path';

interface IDBConnect {
  NODE_ENV: string;
  MYSQL_DB: string;
  MYSQL_USER: string;
  MYSQL_PASS: string;
  MYSQL_PORT: string;
}
export async function dbConnection(nodeEnv: IDBConnect): Promise<Connection> {
  const {
    NODE_ENV,
    MYSQL_DB,
    MYSQL_USER,
    MYSQL_PASS,
    MYSQL_PORT = '3306',
  } = nodeEnv;
  return await createConnection({
    type: 'mysql',
    host: 'localhost',
    port: parseInt(MYSQL_PORT, 10),
    timezone: '+08:00',
    username: MYSQL_USER,
    password: MYSQL_PASS,
    database: MYSQL_DB,
    logging: NODE_ENV === 'development' ? 'all' : false,
    // synchronize: NODE_ENV === 'development',
    // Tried using 'extra' as saw in another issue. Also tried: 'utf8', 'utf8_general_ci', 'utf8mb4'
    charset: 'UTF8_GENERAL_CI',
    entities: [join(__dirname, '../module/*.entity.ts')],
    entityPrefix: 'oss_',
  });
}