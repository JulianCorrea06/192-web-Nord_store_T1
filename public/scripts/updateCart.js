window.addEventListener('load', function(){
    
    var shopping_counter = document.querySelector('.shopping_counter');

    function updateCart(){
        fetch('/api/kart/')
            .then(function(response) {
                    console.log(response);
                    return response.json();
                })
                .then(function(data) {
                    console.log(data); //data es lo que le pedi
                    shopping_counter.innerText = data.products.length;
                });
    }

    updateCart();
    this.window.updateCart = updateCart;


});