import { IConnection } from 'factory/factory-connection';

export class ConnectionEmpty implements IConnection {
   connect() {
      console.log('Unspecified supplier 😲!');
   }
   disconnect() {
      console.log('Unspecified supplier 😲!');
   }
}
