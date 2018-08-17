import { config } from 'dotenv';
import { dbConnection } from './connection';
import { Container } from 'typedi';
import { InstallDBService } from './installDBService';

config();

const createApp = async () => {
  const { NODE_ENV = '', MYSQL_DB = '', MYSQL_USER = '', MYSQL_PASS = '', MYSQL_PORT = '3306' } = process.env;
  const conn = await dbConnection({ NODE_ENV, MYSQL_DB, MYSQL_USER, MYSQL_PASS, MYSQL_PORT });
  // CREATE DATABASE `oss_acl` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
  // synchronize schema
  await conn.synchronize(true);
  return conn;
};
createApp().then((conn) => {
  Container.get(InstallDBService).start(conn).then(() => {
    console.log('db initialized success!');
    process.exit(0);
  });
});
