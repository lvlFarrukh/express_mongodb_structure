const User = require('./userModel');

const addUser = (title, auther, body) =>{                              //Add Data in mdb
    const user = User({title: title, author: auther, body: body});
    user.save()
    .then(() =>{ console.log('User saved!')} )
    .catch((err) =>{ console.log(err)} )
}

// const getUser = (name, age) =>{                              get Data in mdb
//     User.find({name: 'Taha'})
//     .then((users) =>{ console.log(users)} )
//     .catch((err) =>{ console.log(err)} )
// }

// const removeUser = (name, age) =>{                             // get Data in mdb
//     User.remove({name: 'Taha', age: '23'})
//     .then(() =>{'Remove success'} )
//     .catch((err) =>{ console.log(err)} )
// }

// const getUser = () =>{

// }

module.exports = addUser;
