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




musicButton.addEventListener('Click', handleClick);




