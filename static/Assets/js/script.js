// JavaScript Document
//wow js  
 new WOW().init();
 
/*nanbar JS*/
const burger = document.getElementById('burger');
const navList = document.getElementById('nav-list');

burger.addEventListener('click', () => {
  navList.classList.toggle('active');
});

var modal = document.querySelector(".modal_1");
var trigger = document.querySelector(".trigger_1");
var closeButton = document.querySelector(".close-button_1");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}
//modal on navbar

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

/*Banner slider JS*/
 var swiper = new Swiper(".mySwiper", {
      spaceBetween: 10,
      slidesPerView: 2,
      freeMode: true,
      watchSlidesProgress: true,
    });
    var swiper2 = new Swiper(".mySwiper2", {
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      thumbs: {
        swiper: swiper,
      },
    });
	
	
	/*Banner Text JS*/
	consoleText(['Find Your Perfect Match with Marriage App'], 'text',['#db4699']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}
	/*feature slider JS*/

$('.feature-slider').owlCarousel({
    loop:true,
	autoplay: false,
	autoplayTimeout:3000,
	smartSpeed:5000,
    margin:10,
	nav:true,
	dots:true,
    responsive:{
        0:{
            items:1
        },
        568:{
            items:2
        },
        993:{
            items:3
        },
		1100:{
            items:4
        }
    }
})
	
/*Testimonail slider JS*/

$('.test-slider').owlCarousel({
    loop:true,
	autoplay: false,
	autoplayTimeout:3000,
	smartSpeed:5000,
    margin:10,
	nav:true,
	dots:true,
    responsive:{
        0:{
            items:1
        },
        568:{
            items:2
        },
        993:{
            items:3
        }
    }
})

/*Conuter JS*/

jQuery(document).ready(function($) {
		$('.countdown').counterUp({
			delay: 30,
			time: 1000
		});
	});

/*Accordion JS*/
const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach(item =>
  item.addEventListener("click", () => {
    const isItemOpen = item.classList.contains("open");
    accordionItems.forEach(item => item.classList.remove("open"));
    if (!isItemOpen) {
      item.classList.toggle("open");
    }
  })
);