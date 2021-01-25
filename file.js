DATABASE=mongodb://localhost:27017/gqlreactnode


const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Ryan:mnqELJTpqSSGHlpF@cluster0.rx6ov.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
