window.onload = function() {
    // Slider
    $('.owl-carousel').owlCarousel({
        items: 3,
        loop: true,
        margin: 55,
        nav: true,
        center: true,
        navText: [
            "<img src='./icons/right-arrow.png' alt='catalog-item-img' class='information__arrow information__arrow-left' ></img>",
            "<img src='./icons/right-arrow.png' alt='catalog-item-img' class='information__arrow information__arrow-right' ></img>"
        ],
        dots: false
    });

    // Tabs
    const tabs = document.querySelectorAll('.description__tab'),
          tabContents = document.querySelectorAll('.description__tabcontent');
    tabContents[0].style.display = 'flex';
    tabContents[0].style.opacity = '1';
    tabs.forEach(item => {
        item.addEventListener('click', function(e) {
            if(!this.classList.contains('description__tab-active')) {
                let tabNumber = this.getAttribute('data-num');
                for(let i = 0; i < tabs.length; i++) {
                    tabs[i].classList.remove('description__tab-active');
                    tabContents[i].style.display = 'none';
                    tabContents[i].style.opacity = '0';
                }
                document.getElementById(tabNumber).style.display = 'flex';
                let anim = document.getElementById(tabNumber).animate([
                    {opacity: '1'}
                ], 500);
                anim.addEventListener('finish', function() {
                    document.getElementById(tabNumber).style.opacity = '1';
                });
                this.classList.add('description__tab-active');
            }
        });
    });

    // Menu
    let burgerBtn = document.querySelector('.burger'),
        menu = document.querySelector('.main .menu__list');

    function toggleMenu(menuClass, burgerClass) {
        menuClass.classList.toggle('menu-notactive');
        menuClass.classList.toggle('menu-active');
        burgerClass.classList.toggle('burger-active');
    }

    burgerBtn.addEventListener('click', () => {
        toggleMenu(menu, burgerBtn);
    });
    Hammer(menu).on('swipeleft', () => {
        toggleMenu(menu, burgerBtn);
    });
};