import { IConnection } from 'factory/factory-connection';

export class ConnectionSqlite implements IConnection {
   constructor(
      private readonly host: string = 'localhost',
      private readonly port: number = 3306,
      private readonly user: string = 'root',
      private readonly password: string = '',
   ) {}
   connect() {
      console.log('Connected to Sqlite 👍!');
   }
   disconnect() {
      console.log('Disconnect from Sqlite 😵!');
   }
}
