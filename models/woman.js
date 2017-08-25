var mongoose = require('mongoose');

//Woman Schema
var womanSchema = mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  birthDate:{
    type: String,
    required: true
    //default: Date.now
  },
  deceaseDate:{
    type: String //porque las he metido así
    //default: Date.now
  },
  field:{
    type: String,
    required: true
  },
  job:{
    type: String,
    required: true
  },
  bio:{
    type: String,
    required: true
  },
  quote:{
    type: String,
    required: true
  },
  image_url:{
    type: String
  }
}/*,{collection: 'women'}*/);

var Woman = module.exports = mongoose.model('Woman', womanSchema);

//Get Women: los coge porque mongoose, si no le especificas nada, coge la versión plural y con minúsculas del nombre del objeto.
module.exports.getWomen = function(callback, limit){
  Woman.find(callback).limit(limit);
}

//Get Woman
module.exports.getWomanById = function(id, callback){
  Woman.findById(id, callback);
}

//Add Woman
module.exports.addWoman = function(woman, callback){
  Woman.create(woman, callback);
}

//Update woman
module.exports.updateWoman = function(id, woman, options, callback){
  var query = {_id: id};
  var update = {
    name: woman.name,
    birthDate: woman.birthDate,
    deceaseDate: woman.deceaseDate,
    field: woman.field,
    job: woman.job,
    bio: woman.bio,
    quote: woman.quote,
    image_url: woman.image_url
    }
  Woman.findOneAndUpdate(query, update, options, callback);
}

//Delete woman
module.exports.deleteWoman = function(id, callback){
  var query = {_id: id};
  Woman.remove(query, callback);
}
