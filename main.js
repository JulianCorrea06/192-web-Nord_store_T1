function handleScroll(event){

        var nav = document.querySelector('.header__menu');
        var navItems = nav.querySelectorAll('.hypertext');

        for(var i=0; i < navItems.length;i++){
            var navItem = navItems[i];
            var selector = navItem.getAttribute('href');
            var title = document.querySelector(selector);
            if(window.scrollY > title.offsetTop){
                
            }
        }
}

window.addEventListener('scroll', handleScroll);

var musicButton = document.getElementById('S1');


//---------------------------------------------------

function handleClick(event){
    var options = document.querySelectorAll('interact__buttons');
    for(var i=0; i < options.length;i++){
        var option = options[i];
        var selector = option.getAttribute('src');
        var title = document.querySelector(selector);
        var titulo = selector.toString;

        comparador = new String (titulo);

        

        if(comparador == "/DATA/BTN1.png"){
        option.setAttribute('src','/DATA/BTN1act.png');

        }
        if(title== "/DATA/BTN2.png"){
        option.setAttribute('src','/DATA/BTN2act.png');
        }
        if(title== "/DATA/BTN3.png"){
        option.setAttribute('src','/DATA/BTN3act.png');
        }
    }
}


musicButton.addEventListener('Click', handleClick);




