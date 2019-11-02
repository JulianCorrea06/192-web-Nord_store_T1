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

  var range = document.querySelector('.buffer__slider');
  var sliderlabel = document.querySelector('.buffer__label');
  range.addEventListener('input', () =>{
    sliderlabel.innerHTML = '$' + range.value;
  });
    /*
    function handleLast(){

        tape.classList.add('slider__tape--inactive');
        
      }
      
      
      function handleClickr(event) {
        if(count<4){
          count++;
        }
        
        if(count ==1){
          tape.classList.remove('slider__tape--inactive');
        }
        
        var mov = slider.offsetWidth * -0.78 * count;
        tape.style.transform = 'translate(' + mov + 'px, 0px)';
      
        
        
      }
      
      
      
      rbutton.addEventListener('click', handleClickr);
      
      function handleClickl(event) {
        if(count>0){
          count--;
        }
        
        var mov = slider.offsetWidth * +0.78 * -count;
        tape.style.transform = 'translate(' + mov + 'px, 0px)';
        
        
      }
      /*
      lbutton.addEventListener('click', handleClickl);
      if (elInput) {
        var label = document.querySelector('.buffer__label');
        
        
        
        if (label) {
          label.innerHTML = elInput.value;
          
          elInput.addEventListener('input', function() {
            label.innerHTML = "$" + elInput.value;
            aparecer();
            
            
          }, false);
        }
        
      }
      */
    

    


    
 });
 