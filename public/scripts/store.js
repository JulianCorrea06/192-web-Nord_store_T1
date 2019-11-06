window.addEventListener('load', function(){ 

  var car = document.querySelectorAll('.kart_btn');
  car.forEach(product=>{

    product.addEventListener("click", function(){

      var data = new URLSearchParams();
      data.append("idProduct",addToCart.getAttribute("data-id"));

      var promise = fetch('/api/kart/',{
        method: 'POST',
        body : data
    });
  });

  var range = document.querySelector('.buffer__slider');
  var sliderlabel = document.querySelector('.buffer__label');
  range.addEventListener('input', () =>{
    sliderlabel.innerHTML = '$' + range.value;
  });


        
 });
}) ;