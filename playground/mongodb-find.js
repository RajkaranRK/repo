const {MongoClient } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if (err) {
    return console.log('Unable to connect mongodb server....');;
  }
  console.log('Connected To mongodb database server');
  db.collection('Todos').find().toArray().then((res)=>{
    if (!res.length > 0) {
        return console.log('No such record exists....');;
    }
    console.log(JSON.stringify(res,undefined,2));
  },(err)=>{
    console.log('Error : '+err);
  });
//use to search for pertocular value.....
  // db.collection('Todos').find({name:'Raj'}).toArray().then((res)=>{
  //   if (!res.length > 0) {
  //       return console.log('No such record exists....');;
  //   }
  //   console.log(JSON.stringify(res,undefined,2));
  // },(err)=>{
  //   console.log('Error : '+err);
  // });
  db.close();
});
