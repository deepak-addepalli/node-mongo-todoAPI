const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  db.collection('Users').find({name:'La La La'}).count().then((count)=> {
    console.log('Todos');
    console.log(`Document count: ${count}`);
  },(err) => {
    console.log('Unable to fetch docs',err);
  });

  // db.close();
});
