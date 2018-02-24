const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

db.collection('Users').deleteMany({name:'Deepak'}).then((result) => {
  console.log('Todos Collection');
  console.log(JSON.stringify(result));
}, (err) => {
  console.log('Could not fetch documents',err);
});

db.collection('Users').findOneAndDelete({_id: new ObjectID('5a9093a31182cf89b4fadf3e')}).then((result) => {
  console.log('Todos Collection');
  console.log(JSON.stringify(result));
}, (err) => {
  console.log('Could not fetch documents',err);
});

  // db.close();
});
