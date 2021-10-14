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
        dots: false,
        responsive: { //Адаптация в зависимости от разрешения экрана
            0:{
                items: 1,
                center: true,
                margin: 1
            },
            480:{
                items: 2,
                center: false,
                margin: 25
            },
            550: {
                items: 2,
                center: false,
                margin: 35
            },
            768:{
                items: 3,
                margin: 35
            },
            880: {
                margin: 55
            }
        }
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
    if(screen.width > "768") {
        $.fn.setCursorPosition = function(pos) {
            if ($(this).get(0).setSelectionRange) {
                $(this).get(0).setSelectionRange(pos, pos);
            } else if ($(this).get(0).createTextRange) {
                var range = $(this).get(0).createTextRange();
                range.collapse(true);
                range.moveEnd('character', pos);
                range.moveStart('character', pos);
                range.select();
            }
        };
        $('#input-phone1').click(function(){
            $(this).setCursorPosition(4);
        }).mask("+7 (999) 999-99-99",{autoclear: false});
    }
};