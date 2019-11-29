const assert = require('assert');
const ObjectID = require ('mongodb').ObjectID;

function createRoutes (app, db) {
var cartList =[];

    app.get('/', (request, response) => {
        console.log('alguien entró a la ruta inicial');
        response.sendFile(__dirname + '/public/index.html');
    });
    app.get('/carrito', (request, response) => {
        const products = db.collection("products");
        const cart = db.collection("carProducts");
        console.log('Alguien entró al carrito');
        
        //buscamos los id de los productos que agregué al carro
        cart.find({})
        //transformamos el cursor en un arreglo
        .toArray((err,result)=>{
            //aseguramos de que no hay error
            assert.equal(null, err);
            
            var idsCart = [];//un arreglo para guardar todos los ids que tengo en el carrito
            result[0].products.forEach(id => {
                idsCart.push(new ObjectID (id));//agrego todos los id al nuevo arreglo
            });
            console.log(idsCart);
        
            
            //buscamos todos los productos
            products.find({ _id: {$in: idsCart}})
            //transformamos el cursor a un arreglo
            .toArray((err, resultProducts) => {
                //aseguramos de que no hay error
                assert.equal(null, err);
                var context = {
                    products: resultProducts,
                };
                response.render('carProducts',context);
            });
        });
    });


    app.get('/kart', (request, response) => {
        const car = db.collection('carProducts');

        //buscamos todos los productos
        car.find({})
            //transformamos el cursor a una arreglo
            .toArray((err, result) => {
                //aseguramos de que no hay error
                assert.equal(null, err);

                var context = {product: result[0]};

                response.render('carProducts',context);
            });
    });
   /* 

    app.get('/kart', (request, response) => {
        const car = db.collection('carProducts');

        //buscamos todos los productos
        car.find({})
            //transformamos el cursor a una arreglo
            .toArray((err, result) => {
                //aseguramos de que no hay errorno
                assert.equal(null, err);

                var context = {product: result[0]};

                response.render('carProducts',context);
            });
    });

    */

   app.get('/api/kart/',(request,response)=>{
    const cart = db.collection('carProducts');

    cart.find({}).toArray((err, result) => { //result es lo que me trae

        //aseguramos de que no hay error
        assert.equal(null, err);
        response.send(result[0]);
    });
});

app.get('/store', (request, response) => {
    const products = db.collection('products');

    var filters = {}
    if(request.query.price != undefined) {
        filters.price = { $lte: parseInt(request.query.price) };
    }
    //buscamos todos los productos
    products.find(filters)
        //transformamos el cursor a una arreglo
        .toArray((err, result) => {
            //aseguramos de que no hay error
            assert.equal(null, err);

            var context = {products: result}

            response.render('products',context);
        });
});

app.get('/api/filters', (request, response)=>{
    const products = db.collection("products");
    


    if(request.query.selectValue == "mayor_precio"){
        copyProducts.find().sort({price: -1})
        .toArray((err,result)=>{
            assert.equal(null,err);
            response.send(result);
            
        });
    }

    if(request.query.selectValue == "menor_precio"){
        copyProducts.find().sort({price: 1})
        .toArray((err,result)=>{
            assert.equal(null,err);
            response.send(result);
        });
    }

    if(request.query.selectValue == "mayor_popularidad"){
        copyProducts.find().sort({popularity: -1})
        .toArray((err,result)=>{
            assert.equal(null,err);
            response.send(result);
        });
    }

    if(request.query.selectValue == "menor_popularidad"){
        copyProducts.find().sort({popularity: 1})
        .toArray((err,result)=>{
            assert.equal(null,err);
            response.send(result);
        });
    }

    if(request.query.selectValue == "mayor_tamaño"){
        copyProducts.find().sort({size: -1})
        .toArray((err,result)=>{
            assert.equal(null,err);
            response.send(result);
        });
    }

    if(request.query.selectValue == "menor_tamaño"){
        copyProducts.find().sort({size: 1})
        .toArray((err,result)=>{
            assert.equal(null,err);
            response.send(result);
        });
    }

    var context ={
        prodcuts: copyProducts
    };
   response.render('store', context);

});


   app.post('/api/kart/',(request,response)=>{
    const cart = db.collection('carProducts'); //selecciono la colección de la base de datos
    cart.find({}).toArray((err, result) => { //result es lo que me trae
        var arrayCart = result[0]; //lo guardo en una variable
        arrayCart.products.push(request.body.idProduct); //le agrego en texto lo que me llegó de body, le llega en texto

        cart.updateOne({_id: new ObjectID (arrayCart._id) }, //convierte el id qu ele llegó en texto, a un id de mongo
            {
                $set: {products: arrayCart.products} //lo actualiza
            } 
        );
        //aseguramos de que no hay error
        assert.equal(null, err);
        response.send({
            message: 'todo bien',
            arrayCart
        });
/*** */


    });
});

app.post('/api/formulary/',(request,response)=>{
    const cart = db.collection('carProducts'); //selecciono la colección de la base de datos
    const buycart = db.collection('Buy');

    cart.find({}).toArray((err, result) => {
        assert.equal(null, err);

        var car = result[0];
request.body.products = car.products;
buycart.insertOne(request.body);

response.send({
    message: 'ok'
});

    });

    
});

/*
app.post('/api/kart/:id', (request, response) => {
    var id = request.params.id;
    var query= {};        
    
    var esId=false;
    var cont=1;
    var encuentraComun=false;
    
    cart.find({})
    // transformamos el cursor a un arreglo
    .toArray((err, result) => {
        // asegurarnos de que noh ay error
        
        //
        
        var c=0;
        for(c;c<result.length;c++){
            if(request.params.id.toString()===result[c]._id.toString()){
                esId=true;  
                var i=0;

                for(i;i<cartList.length;i++){
                    
                    if (request.params.id.toString()===cartList[i]._id.toString()){
                        
                        encuentraComun=true;

                    } 
                }
                if(encuentraComun==true){
                    console.log(cartList[c]);
                    cartList[c].cantidad+=1;
                }else{
                    result[c].cantidad=cont;
                    cartList.push(result[c]);
                }
                
            } 
        }
        
        
        if(!esId){
            response.send({
                message: 'error',
                cartSize: cartList.length
            });
            return;
        }
        
        
        
        response.send({
            cartSize: cartList.length
        });
        
    });
    
    
    
});
*/

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