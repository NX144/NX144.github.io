/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener("DOMContentLoaded", function () {
  $('.owl-carousel2').slick({
    dots: true,
    slidesToShow: 1,
    padding: "50px",
    prevArrow: '<button type="button" class="slick-prev"><img src="../icons/header-component/arrow-left.png" alt="prev"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="../icons/header-component/arrow-right.png" alt="next"></button>'
  });
  let sliderWidth1 = document.querySelector(".slider-width1"),
    sliderWidth2 = document.querySelector(".slider-width2");
  if (sliderWidth1 && sliderWidth2 && window.innerWidth <= 991) {
    sliderWidth1.style.display = "none";
    sliderWidth2.style.display = "block";
  }
  $('.main-slider__block').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    prevArrow: '<button type="button" class="slick-prev"><img src="../icons/header-component/arrow-left.png" alt="prev"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="../icons/header-component/arrow-right.png" alt="next"></button>'
  });
  let owlSliders = document.querySelectorAll(".owl-carousel");
  if (owlSliders.length > 0) {
    $('.owl-carousel').owlCarousel({
      loop: false,
      margin: 10,
      nav: true,
      dots: false,
      responsive: {
        0: {
          items: 1,
          nav: false,
          dots: true
        },
        375: {
          items: 2,
          nav: false,
          dots: true
        },
        425: {
          items: 2,
          nav: false,
          dots: true
        },
        640: {
          items: 3
        },
        768: {
          items: 4
        },
        1200: {
          items: 5
        },
        1645: {
          items: 5
        }
      }
    });
  }
  $('.about__block-item').slick({
    dots: true,
    infinite: false,
    autoplay: true,
    slidesToShow: 1,
    prevArrow: '<button type="button" class="slick-prev"><img src="../icons/about-component/arrow-left.png" alt="prev"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="../icons/about-component/arrow-right.png" alt="next"></button>'
  });
  function mainCatalogOverlay(catalog, btn, close, active) {
    let overlayCatalog = document.querySelector(catalog),
      overlayBtn = document.querySelectorAll(btn),
      overlayClose = document.querySelector(close),
      overlayActiveClass = active;
    overlayBtn.forEach(item => {
      item.addEventListener("click", e => {
        overlayCatalog.classList.add(overlayActiveClass);
        document.querySelector("body").style.overflow = "hidden";
      });
    });
    overlayClose.addEventListener("click", e => {
      overlayCatalog.classList.remove(overlayActiveClass);
      document.querySelector("body").style.overflow = "unset";
    });
  }
  mainCatalogOverlay(".overlay-catalog", ".header__list_item-btn", ".overlay-catalog__close", "overlay-catalog-active");
  function toggleClassItems(myClass, myClassActive) {
    let myItemClass = document.querySelectorAll(myClass);
    myItemClass.forEach(item => {
      item.addEventListener("click", () => item.classList.toggle(myClassActive));
    });
  }
  toggleClassItems(".popular__item_descr-like", "like-active");
  toggleClassItems(".popular__item-btn", "popular__item-btn-active");
  toggleClassItems(".catalog-page__block2__item2-buttons-wrapper-heart", "catalog-page__block2__item2-buttons-wrapper-heart-active");

  // function priceUpdate() {
  //     let downPrice = document.querySelector(".catalog-page__filter_have-price-down"),
  //         upPrice = document.querySelector(".catalog-page__filter_have-price-up"),
  //         formFilter = document.querySelector(".catalog-page__filter"),
  //         blockItems = document.querySelector(".catalog-page__block"),
  //         resultItems = "";

  //     formFilter.addEventListener("submit", (e) => {

  //     });
  // }

  const sortBtn = document.querySelectorAll(".catalog-page__sort_btn");
  sortBtn.forEach(item => {
    item.addEventListener("click", () => {
      if (item.classList.contains("catalog-page__sort_cube")) {
        item.classList.add("catalog-page__sort_cube-active");
        document.querySelector(".catalog-page__sort_list").classList.remove("catalog-page__sort_list-active");
        document.querySelector(".catalog-page__block").style.display = "flex";
        document.querySelector(".catalog-page__block2").style.display = "none";
      }
      if (item.classList.contains("catalog-page__sort_list")) {
        item.classList.add("catalog-page__sort_list-active");
        document.querySelector(".catalog-page__sort_cube").classList.remove("catalog-page__sort_cube-active");
        document.querySelector(".catalog-page__block2").style.display = "flex";
        document.querySelector(".catalog-page__block").style.display = "none";
      }
    });
  });
  const headerMenu = document.querySelector('.header-menu'),
    headerMenuClose = document.querySelector('.header-menu__close'),
    headerHumburger = document.querySelector('.header__block-hamburger');
  headerHumburger.addEventListener('click', () => {
    headerMenu.classList.toggle("header-menu-active");
  });
  headerMenuClose.addEventListener('click', () => {
    headerMenu.classList.toggle("header-menu-active");
  });

  // Адаптив для sales

  if (window.innerWidth <= 1835) {
    let salesBlocks = document.querySelectorAll(".sales__block");
    if (salesBlocks.length > 0) {
      salesBlocks.forEach(item => item.classList.contains("sales__block-50") ? item.classList.remove("sales__block-50") : null);
    }
  }

  // function expandElement(elem, collapseClass) {
  //     // debugger;
  //     elem.style.height = '';
  //     elem.style.transition = 'none';

  //     const startHeight = window.getComputedStyle(elem).height;

  //     // Remove the collapse class, and force a layout calculation to get the final height
  //     elem.classList.toggle(collapseClass);
  //     const height = window.getComputedStyle(elem).height;

  //     // Set the start height to begin the transition
  //     elem.style.height = startHeight;

  //     // wait until the next frame so that everything has time to update before starting the transition
  //     requestAnimationFrame(() => {
  //         elem.style.transition = '';

  //         requestAnimationFrame(() => {
  //             elem.style.height = height;
  //         })
  //     })

  //     // Clear the saved height values after the transition
  //     elem.addEventListener('transitionend', () => {
  //         elem.style.height = '';
  //         elem.removeEventListener('transitionend', arguments.callee);
  //     });
  // }

  const footerItem = document.querySelectorAll(".footer__item");

  // const footerItemLinks = document.querySelectorAll(".footer__item-links");

  // footerItemLinks.forEach(item => {
  //     expandElement(item, 'footer__item-links-active');
  // })

  footerItem.forEach(item => {
    // if(item.nextElementSibling.classList.contains("footer__item-links") && window.innerWidth < 768) {
    //     expandElement(item, 'footer__item-links-active');
    // }
    item.addEventListener("click", e => {
      if (window.innerWidth <= 786) {
        // console.dir(e.target);
        if (e.target && e.target.classList.contains("footer__item-title")) {
          e.target.nextElementSibling.classList.toggle("footer__item-links-active");
          e.target.lastChild.classList.toggle("arrow-active");
        } else if (e.target && e.target.parentNode.classList.contains("footer__item-title")) {
          e.target.classList.toggle("arrow-active");
          e.target.parentNode.nextElementSibling.classList.toggle("footer__item-links-active");
        }
      }

      // const content = e.target.nextElementSibling;
      // expandElement(content, 'footer__item-links-active');
    });
  });

  let filterBtnItem = document.querySelector(".catalog-page__sort_filt"),
    filerModal = document.querySelector(".catalog-page__filter"),
    filterClose = document.querySelector(".catalog-page__close");
  if (filterBtnItem && filerModal && filterClose) {
    filterBtnItem.addEventListener("click", () => {
      filerModal.classList.add("catalog-page-active");
    });
    filterClose.addEventListener("click", () => {
      filerModal.classList.remove("catalog-page-active");
    });
  }
  const ccTimes = document.querySelector('.category-catalog__menu_wrap-times'),
    ccMenu = document.querySelector('.category-catalog__menu_wrap'),
    ccBtn = document.querySelector('.category-catalog__btn-cat');
  if (ccTimes && ccMenu && ccBtn) {
    ccBtn.addEventListener('click', () => {
      ccMenu.classList.add('category-catalog__menu_wrap-active');
      document.body.classList.add('overflow-yh');
    });
    ccTimes.addEventListener('click', () => {
      ccMenu.classList.remove('category-catalog__menu_wrap-active');
      document.body.classList.remove('overflow-yh');
    });
  }
  const mainForm = document.querySelector('.form-section__wrap');
  function postData(form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Сам AJAX запрос
      const request = new XMLHttpRequest();
      request.open("POST", "./mailer/smart.php");
      // Не нужно устанавливать заголовки для формата XMLHttpRequest + FormData
      // request.setRequestHeader("Content-Type", "multipart/form-data; charset=UTF-8");
      const gtg = new FormData(form);
      request.send(gtg);

      // Взаимодействие с модальным окном
      const modalRequest = document.querySelector('#modal-success'),
        modalRequestInner = document.querySelector('.modal-success__block'),
        modalClose = document.querySelector('.modal-success__block-close');
      modalRequest.style.cssText = "transition: .3s all ease-in-out;";
      let objRequest = {
        ok: {
          title: "Благодарю за заявку!",
          descr: "Скоро с вами свяжется мой менеджер"
        },
        bad: {
          title: "Что-то пошло не так....",
          descr: "Попробуйте ещё раз или напишите в тех.поддержку!"
        }
      };
      class MessRequest {
        constructor(message, classObj) {
          this.message = message;
          this.classObj = classObj;
        }
        render() {
          modalRequest.classList.remove("hide");
          document.body.classList.add('overflow-hidden');
          let requestMessage = document.createElement('div');
          requestMessage.className = this.classObj;
          requestMessage.innerHTML = this.message;
          modalRequestInner.appendChild(requestMessage);
          // if(modalRequestInner.childNodes[3]) {
          //     modalRequestInner.childNodes[3].nextSibling.classList.add("title");
          // }
          // console.log(modalRequestInner.childNodes[2].nextSibling);
          // console.dir(modalRequestInner.childNodes[2].nextSibling);
        }
      }

      function modalCls() {
        modalRequest.classList.add('hide');
        document.body.classList.remove('overflow-hidden');
        let objText = document.querySelector(".modal-success__block");
        while (objText.childNodes.length > 2) {
          objText.removeChild(objText.lastChild);
        }
      }
      modalClose.addEventListener('click', () => {
        modalCls();
      });
      if (modalRequest.classList.contains('hide')) {
        document.querySelector('.modal-success').addEventListener('click', function () {
          modalCls();
        });
      }
      request.addEventListener('load', () => {
        if (request.status === 200 && request.readyState === 4) {
          new MessRequest(objRequest.ok.title, "modal-success__block-title title").render();
          new MessRequest(objRequest.ok.descr, "modal-success__block-descr title").render();
        } else {
          new MessRequest(objRequest.bad.title, "modal-success__block-title title").render();
          new MessRequest(objRequest.bad.descr, "modal-success__block-descr title").render();
        }
      });
      document.querySelectorAll("form input").forEach(item => {
        item.value = "";
      });
      document.querySelectorAll("form textarea").forEach(item => {
        item.value = "";
      });
    });
  }
  if (mainForm) {
    postData(mainForm);
  }
});

/***/ })

/******/ });
//# sourceMappingURL=script.js.map