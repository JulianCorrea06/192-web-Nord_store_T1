const express = require('express');
// importar body parser
var bodyParser = require('body-parser');
// importar handlebars :)
var exphbs  = require('express-handlebars');
 
// instanciar app
const app = express();
//lineas de handlebars
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// configuración body parser para poder usar variables post en el body
app.use(bodyParser.urlencoded({ extended: true }));

// definir puerto
const port = 4000;

// importar mongo
const MongoClient = require('mongodb').MongoClient;
//si dice requiere no es algo que se daba pasar, dice igual a algo si se debe pasar porque es una instancia
const assert = require('assert');

//importar createRoutes
const createRoutes = require('./routes.js');

//Connection URL
const url = 'mongodb+srv://julianCo:interjuli1106@cluster0-33z1u.mongodb.net/test?retryWrites=true&w=majority';

// Database Name
const dbName = 'store';

// Create a new MongoClient
const client = new MongoClient(url);

//conectarse al cliente
client.connect(function(err) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
    
    //le dice que se conecte a la base de datos que ya creamos
    const db = client.db(dbName);
    
    
    //products es el nombre de la colección en la base de datos, debe llamarse igual 
    const tipoDinosaurios = db.collection('products');

    createRoutes(app,db);
    
});
//cambio chimbo
//const client = new mongoClient("mongodb://localHost:27017");

// definir una carpeta como pública
app.use(express.static('public'));


app.listen(process.env.PORT || 4000, () => {
    console.log(`Servidor iniciado en el puerto ${port}`);
});