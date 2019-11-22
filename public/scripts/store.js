window.addEventListener('load', function(){ 

  var car = document.querySelectorAll('.kart_btn');
  var shopping_counter = document.querySelector('.shopping_counter');

 /* car.forEach(product=>{

    product.addEventListener("click", function(){

      var data = new URLSearchParams();
      data.append("idProduct",addToCart.getAttribute("data-id"));

      var promise = fetch('/api/kart/',{
        method: 'POST',
        body : data
    });

    promise.then((raw)=>{
        return raw.json();
    }).then(info =>{
      displayCart();
      console.log(data);
    });
  });
  */

  car.forEach(function(btn) {

    btn.addEventListener('click', function(event){
        
        event.preventDefault();

        var data = new URLSearchParams();
        data.append("idProduct", btn.getAttribute("data-id")); //idProduct es el nombre de la variable

        // console.log("helow madafaka")

        var promise = fetch('/api/kart/', { method: 'POST', body : data });

        promise.then(function(response) {
                console.log(response);
                return response.json();
            })
            .then(function(data) {//data es lo que le mando
                updateCart(); //aquí se llama la función que refresca el carrito
                console.log(data);
               // shopping_counter.innerText = data.cartLength;
            });

    });


  var range = document.querySelector('.buffer__slider');
  var sliderlabel = document.querySelector('.buffer__label');
  range.addEventListener('input', () =>{
    sliderlabel.innerHTML = '$' + range.value;
  });


        
 });
}) ;