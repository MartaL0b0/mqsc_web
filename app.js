var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(express.static(__dirname +'/client'));
app.use(bodyParser.json());

Field = require('./models/field');
Woman = require('./models/woman');

//connect to mongoose
// mongoose.connect('mongodb://localhost/test', { useMongoClient: true });
mongoose.connect('mongodb://martal0b0:mqsctest1@ds157833.mlab.com:57833/mqsc', { useMongoClient: true });
var db = mongoose.connection;

app.get('/', function(req, res){
  res.send('Please use /api/women or /api/fields');
});

//Get info about fields
app.get('/api/fields', function(req, res){
  Field.getFields(function(err, fields){
    if(err){
      throw err;
    }
    res.json(fields);
  });
});

//Add a new field (create new ones)
app.post('/api/fields', function(req, res){
  var field = req.body;
  Field.addField(field, function(err, field){
    if(err){
      throw err;
    }
    res.json(field);
  });
});

//Upload info about fields (create new ones)
app.put('/api/fields/:_id', function(req, res){
  var id = req.params._id;
  var newField = req.body;
  Field.updateField(id, newField, {},function(err, field){
    if(err){
      throw err;
    }
    //para comprobar que se ha cambiado lo que se tenía que cambiar. Como lo hace él en el tutorial no lo muestra bien porque usa el mismo nombre para dos variables.
    res.send('Field: ' + field.name + ' changed to ' + newField.name);
  });
});

app.delete('/api/fields/:_id', function(req, res){
  var id = req.params._id;
  Field.deleteField(id,function(err, field){
    if(err){
      throw err;
    }
    res.json(field);
  });
});


app.get('/api/women', function(req, res){
  Woman.getWomen(function(err, women){
    if(err){
      throw err;
    }
    res.json(women);
  });
});

app.get('/api/women/:_id', function(req, res){
  Woman.getWomanById(req.params._id,function(err, woman){
    if(err){
      throw err;
    }
    res.json(woman);
  });
});

//Upload info about fields (create new ones)
app.post('/api/women', function(req, res){
  var woman = req.body;
  Woman.addWoman(woman, function(err, woman){
    if(err){
      throw err;
    }
    res.json(woman);
  });
});

app.put('/api/women/:_id', function(req, res){
  var id = req.params._id;
  var newWoman = req.body;
  Woman.updateWoman(id, newWoman, {new:true},function(err, woman){
    if(err){
      throw err;
    }
    //para comprobar que se ha cambiado lo que se tenía que cambiar. Como lo hace él en el tutorial no lo muestra bien porque usa el mismo nombre para dos variables.
    res.json(woman);
  });
});

app.delete('/api/women/:_id', function(req, res){
  var id = req.params._id;
  Woman.deleteWoman(id, function(err, woman){
    if(err){
      throw err;
    }
    res.json(woman);
  });
});

var port = process.env.PORT || 8080;
app.listen(port);
console.log('Running on port ' + port + '...');

//VUELVE A CONECTAR LA APP QUE LA HAS PARADO
