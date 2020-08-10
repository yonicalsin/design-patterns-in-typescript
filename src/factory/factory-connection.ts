import { ConnectionEmpty } from './connections/empty.connection';
import { ConnectionMysql } from './connections/mysql.connection';
import { ConnectionOracle } from './connections/oracle.connection';
import { ConnectionSqlite } from './connections/sqlite.connection';

export interface IConnection {
   connect(): void;
   disconnect(): void;
}

type Engine = 'MYSQL' | 'ORACLE' | 'SQLITE';

export class FactoryConnection {
   public getConnection(engine: Engine): IConnection {
      switch (engine) {
         case 'MYSQL':
            return new ConnectionMysql();
         case 'ORACLE':
            return new ConnectionOracle();
         case 'SQLITE':
            return new ConnectionSqlite();
         default:
            return new ConnectionEmpty();
      }
   }
}
