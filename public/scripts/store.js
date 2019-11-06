window.addEventListener('load', function(){ 

    function displayList() {
        fetch('/api/productsItems')
        .then(function(response) {
            return response.json();
        })
        .then(function(listItems) {
            listItems.forEach(element => {
              var product = document.createElement('div');
              

                console.log(element.name);
            });
        });
    }

  var range = document.querySelector('.buffer__slider');
  var sliderlabel = document.querySelector('.buffer__label');
  range.addEventListener('input', () =>{
    sliderlabel.innerHTML = '$' + range.value;
  });
        
 });
 