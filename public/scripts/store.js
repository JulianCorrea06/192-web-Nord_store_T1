window.addEventListener('load', function(){ 


  var select = document.querySelector('.filter__select');
  var minuscar = document.querySelectorAll('.minuskart_btn');
  var car = document.querySelectorAll('.kart_btn');
  var shopping_counter = document.querySelector('.shopping_counter');
  var checkboxes = document.querySelectorAll('.selection');

  
  

function handleChange() {
  var route = '?price='+range.value;
  checkboxes.forEach((checkbox) => {
      console.log('Checkbox:'+checkbox);
    if(checkbox.cheked) {
       route = route.concat('&type='+checkbox.value);
    }
 });

  
  window.location.href = '/store'+route;
}

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', handleChange);
});

var range = document.querySelector('.buffer__slider');

range.addEventListener('change', handleChange);


 

  car.forEach(function(btn) {

    btn.addEventListener('click', function(event){
        
//Realizar la interacciónde moverse cuando le das click

TweenMax.to(this, 0.4, {scale:1.5, ease:Bounce.easeOut})
    TweenMax.to(this, 0.2, {scale:1, delay:0.4})

      
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

    minuscar.forEach(function(btn) {

      btn.addEventListener('click', function(event){
          
  //Realizar la interacciónde moverse cuando le das click
  
  TweenMax.to(this, 0.4, {scale:1.5, ease:Bounce.easeOut})
      TweenMax.to(this, 0.2, {scale:1, delay:0.4})
  
        
          event.preventDefault();
  
          var data = new URLSearchParams();   
          data.append("idProduct", btn.getAttribute("data-id")); //idProduct es el nombre de la variable
  
          // console.log("helow madafaka")
  
          var promise = fetch('/api/kart/', { method: 'DELETE', body : data });
  
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
    });


  var range = document.querySelector('.buffer__slider');
  var sliderlabel = document.querySelector('.buffer__label');
  range.addEventListener('input', () =>{
    sliderlabel.innerHTML = '$' + range.value;
  });


        
 });

 

/*
 function filters(order){

  fetch('/api/filters' + order)
  .then(function(response){
console.log(response);
return response.json();
  })
  .then(function(data){
    console.log(data);
  });
 }

 filters("");

select.addEventListener('change', function(){

filters('?selectValue='+select.value);

  
});*/


}) ;