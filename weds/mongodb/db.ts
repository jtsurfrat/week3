const connectionString:string = "mongodb://jtsurfrat:porter566@ds037215.mlab.com:37215/products";

import * as mongodb from 'mongodb';

export default class Database {
  public static db: mongodb.Db;

  public static connect(){
    return mongodb.MongoClient.connect(connectionString).then((db) => {
      this.db = db;
    }).catch((err) => {
      console.error(err);
    })
  }

}
