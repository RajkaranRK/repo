const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoAPP',(err,db)=>{
  if (err) {
    return console.log('Unable to connect to mongodb database.....');;
  }
  console.log('Connected to mongodb database....');

  db.collection('Users').deleteMany({age:100}).then((result)=>{
    console.log(result);
  });
  db.close();
});
