const _ = require('lodash');

var data = [];
var index = 0;

function add(name, content){
  data.push({name: name, content: content, id: index});
  index++;
}

function list(){
  return _.cloneDeep(data);
}

function find(properties){
/* console.log("called find with the following properties: ");
   var keys = Object.keys(properties);
   for(var i = 0; i<keys.length; i++){
     if(properties.hasOwnProperty(keys[i])){
       console.log("Property key is " + keys[i] + " and property value is " + properties[keys[i]]);
     }
  }*/
  return _.cloneDeep(_.filter(data, properties));
}

module.exports = { add: add, list: list, find: find };


/* Generate fake tweets */

const randArrayEl = function(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

const getFakeName = function() {
  const fakeFirsts = ['Nimit', 'David', 'Shanna', 'Emily', 'Scott', 'Karen', 'Ben', 'Dan', 'Ashi', 'Kate', 'Omri', 'Gabriel', 'Joe', 'Geoff', 'Steve', 'Tom', 'Robert'];
  const fakeLasts = ['Hashington', 'Stackson', 'McQueue', 'OLogn', 'Ternary', 'Claujure', 'Dunderproto', 'Binder', 'Docsreader', 'Ecma', 'Smith', 'Volcker', 'Denning'];
  return randArrayEl(fakeFirsts) + " " + randArrayEl(fakeLasts);
};

const getFakeTweet = function() {
  const awesome_adj = ['awesome', 'breathtaking', 'amazing', 'funny', 'sweet', 'cool', 'wonderful', 'mindblowing', 'impressive', 'salty', 'sandy', 'static'];
  return "Fullstack Academy is " + randArrayEl(awesome_adj) + "! The instructors are just so " + randArrayEl(awesome_adj) + ". #fullstacklove #codedreams";
};

for (let i = 0; i < 45; i++) {
  module.exports.add( getFakeName(), getFakeTweet() );
}

// Testing

//console.log(data);
//console.log("Now testing list. \n ", module.exports.list());
//console.log("Now testing find. \n ", module.exports.find(['name','Lexi Suppes']));
