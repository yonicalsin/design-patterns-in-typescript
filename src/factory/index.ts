import { IConnection, FactoryConnection } from './factory-connection';

const factory: FactoryConnection = new FactoryConnection();

const con1: IConnection = factory.getConnection('MYSQL');
con1.connect();
con1.disconnect();

const con2: IConnection = factory.getConnection('ORACLE');
con2.connect();
con2.disconnect();

const con3: IConnection = factory.getConnection('SQLITE');
con3.connect();
con3.disconnect();
