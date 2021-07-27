const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (cb) => {
  MongoClient.connect(
    "mongodb+srv://mongo:mongo@cluster0.y7y4t.mongodb.net/test?retryWrites=true&w=majority"
  )
    .then((result) => {
      console.log('Connected');
      _db = result.db();
      cb();
    })
    .catch((err) => {throw err});
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw 'No database found'
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;