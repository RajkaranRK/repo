//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');
var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if (err) {
    return console.log('Unable to connect to mongodb database....');;
  }
  console.log('Connected to the mongodb database....');
  db.close();
});
  // db.collection('Todos').insertOne({
  //   name :'Rajkaran',
  //   age: 20,
  //   post:'Software-Developer'
  // },(err,res)=>{
  //   if (err) {
  //     return console.log('Unable to insert todo'+err);;
  //   }
  //   console.log('Inserted Successfully.......');
  //   console.log(JSON.stringify(res.ops,undefined,2));
  // });

//   db.collection('Users').insert({
//     name:'Minions',
//     age:100,
//     location:'Neither Land',
//     like:'Bannanas'
//   },(err,result)=>{
//     if (err) {
//       return console.log('Unable to insert user...'+err);;
//     }
//     console.log('New user added....');
//     console.log(JSON.stringify(result,undefined,2));
//   });
//   db.close();
// });
