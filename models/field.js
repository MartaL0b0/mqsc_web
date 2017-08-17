var mongoose = require('mongoose');

//Field Schema
var fieldSchema = mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  create_date:{
    type: Date,
    default: Date.now
  }
}/*,{collection: 'fields'}*/);

var Field = module.exports = mongoose.model('Field', fieldSchema);

//Get fields: los coge porque mongoose, si no le especificas nada, coge la versión plural y con minúsculas del nombre del objeto.
module.exports.getFields = function(callback, limit){
  Field.find(callback).limit(limit);
}

//Add field
module.exports.addField = function(field, callback){
  Field.create(field, callback);
}

//Update field
module.exports.updateField = function(id, field, options, callback){
  var query = {_id: id};
  var update = {
    name: field.name
    }
  Field.findOneAndUpdate(query, update, options, callback);
}

//Delete field
module.exports.deleteField = function(id, callback){
  var query = {_id: id};
  Field.remove(query, callback);
}
