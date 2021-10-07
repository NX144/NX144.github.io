window.onload = function() {
    $('.owl-carousel').owlCarousel({
        items: 3,
        loop: true,
        margin: 55,
        nav: true,
        center: true,
        navText: [
            "<img src='../icons/right-arrow.png' alt='catalog-item-img' class='information__arrow information__arrow-left' ></img>",
            "<img src='../icons/right-arrow.png' alt='catalog-item-img' class='information__arrow information__arrow-right' ></img>"
        ],
        dots: false,
    });
    const tabs = document.querySelectorAll('.description__tab'),
          tabContents = document.querySelectorAll('.description__tabcontent');
    tabContents[0].style.display = 'flex';
    tabs.forEach(item => {
        item.addEventListener('click', function(e) {
            let tabNumber = this.getAttribute('data-num');
            for(let i = 0; i < tabs.length; i++) {
                tabs[i].classList.remove('description__tab-active');
                tabContents[i].style.display = 'none';
            }
            document.getElementById(tabNumber).style.display = 'flex';
            this.classList.add('description__tab-active');
        });
    });
};
// function openTab(tabNumber) {
//     console.log(this);
//     const tabContents = document.getElementsByClassName('description__tabcontent');
//     for(let tab of tabContents) {
//         tab.style.display = 'none';
//     };
//     document.getElementById(tabNumber).style.display = 'flex';
// }
// openTab(1);
// .style.backgroundColor = '#000'

