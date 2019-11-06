const assert = require('assert');
const ObjectID = require ('mongodb').ObjectID;

function createRoutes (app, db) {

    app.get('/', (request, response) => {
        console.log('alguien entró a la ruta inicial');
        response.sendFile(__dirname + '/public/index.html');
    });

    app.get('/store', (request, response) => {
        const products = db.collection('products');

        //buscamos todos los productos
        products.find({})
            //transformamos el cursor a una arreglo
            .toArray((err, result) => {
                //aseguramos de que no hay error
                assert.equal(null, err);

                var context = {products: result}

                response.render('products',context);
            });
    });

    app.get('/store/:id', (request, response) => {

        var id = request.params.id;
        const products = db.collection('products');

        //buscamos todos los productos
        products.find({"_id": new ObjectID(id)})
            //transformamos el cursor a una arreglo
            .toArray((err, result) => {
                //aseguramos de que no hay error
                assert.equal(null, err);

                var context = {product: result[0]};

                response.render('description',context);
            });
    });
}

module.exports = createRoutes;