window.addEventListener('load', function(){ 

    function displayList() {
        fetch('/api/productsItems')
        .then(function(response) {
            return response.json();
        })
        .then(function(listItems) {
            listItems.forEach(element => {
                console.log(element.name);
            });
        });
    }

    displayList();
    
 });