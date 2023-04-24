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

$('.main-slider__block').slick({
  dots: true,
  infinite: true,
  autoplay: true,
  slidesToShow: 1,
  prevArrow: '<button type="button" class="slick-prev"><img src="../icons/header-component/arrow-left.png" alt="prev"></button>',
  nextArrow: '<button type="button" class="slick-next"><img src="../icons/header-component/arrow-right.png" alt="next"></button>'
});
$('.popular__wrapper').slick({
  dots: false,
  prevArrow: '<button type="button" class="slick-prev"><img src="../img/popular-products/prevArrow.png"></button>',
  nextArrow: '<button type="button" class="slick-next"><img src="../img/popular-products/nextArrow.png"></button>',
  infinite: false,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [{
    breakpoint: 1687,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: true,
      dots: true
    }
  }, {
    breakpoint: 1379,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: true,
      dots: true
    }
  }, {
    breakpoint: 1034,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      dots: true
    }
  }, {
    breakpoint: 600,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1
    }
  }, {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }]
});
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
    overlayBtn = document.querySelector(btn),
    overlayClose = document.querySelector(close),
    overlayActiveClass = active;
  overlayBtn.addEventListener("click", e => {
    overlayCatalog.classList.add(overlayActiveClass);
    document.querySelector("body").style.overflow = "hidden";
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

/***/ })

/******/ });
//# sourceMappingURL=script.js.map