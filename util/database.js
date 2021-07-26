const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const mongoConnect = (cb) => {
  MongoClient.connect(
    "mongodb+srv://mongo:mongo@cluster0.y7y4t.mongodb.net/test?retryWrites=true&w=majority"
  )
    .then((result) => {
      console.log('Connected');
      cb(result);
    })
    .catch((err) => console.log(err));
};

module.exports = mongoConnect;