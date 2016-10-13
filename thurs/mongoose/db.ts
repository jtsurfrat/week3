import * as mongoose from "mongoose";
//import * as mongodb from 'mongodb';

const connectionString:string = "mongodb://jtsurfrat:porter566@ds015194.mlab.com:15194/mongoose1";

export default class Database {
  //public static db: mongodb.Db;

  public static connect() {
    return mongoose.connect(connectionString);
    //mongoose.connection.db.dropDatabase();
  }
}
