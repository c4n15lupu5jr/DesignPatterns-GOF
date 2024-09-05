import { MyDatabaseModule } from './db/my-database-module';

export const myDatabaseClassic = MyDatabaseModule;
myDatabaseClassic.add({ name: 'Luiz', age: 30 });
myDatabaseClassic.add({ name: 'Maria', age: 50 });
myDatabaseClassic.add({ name: 'Eduardo', age: 25 });
