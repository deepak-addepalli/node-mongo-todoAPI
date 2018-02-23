const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if(err){
  //     return console.log('Unable to Insert Todo',err);
  //   }
  //   console.log(JSON.stringify(result.ops,undefined,2));
  // });


  db.collection('Users').insertOne({
    name: 'Deepak',
    age: '25',
    location: '32608'
  }, (err,result) => {
    if(err){
      return console.log('Unable to Insert Todo',err);
    }
    console.log('Inserted Document into Users Collection');
    console.log(JSON.stringify(result.ops, undefined, 2));
  });

  db.close();
});
