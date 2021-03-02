function createSlider() {

const firstSlide = {
    mainText: 'Blog firmowy dla firmy XXX, branża taka i śmaka',
    secondText: 'Klient XXX, sprawdź www',
    secondPicture: 'img/01_glowna_portfolio-1-min.png'
};

const secondSlide = {
    mainText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    secondText: 'Vestibulum tincidunt auctor enim',
    secondPicture: 'img/01_glowna_portfolio-1-min.png'
};

const thirdSlide = {
    mainText: 'Morbi id volutpat purus. Nam ut urna finibus, cursus massa a, laoreet urna.',
    secondText: 'Cras aliquam odio a ex condimentum',
    secondPicture: 'img/01_glowna_portfolio-1-min.png'
};

const secondPicture = document.getElementById('portfolioSecondPicture');
const mainText = document.getElementById('portfolioMainText');
const secondText = document.getElementById('portfolioSecondText');

const sliders = [firstSlide, secondSlide, thirdSlide];
mainText.innerHTML = sliders[0].mainText;
secondText.innerHTML = sliders[0].secondText;
secondPicture.innerHTML = `<img class='shadow-lg img-fluid' src='${sliders[0].secondPicture}'>`;

let i = 0;

document.querySelector('.arrows').addEventListener('click', () => {
        i++;
        if (i > sliders.length - 1) {
        i = 0;
mainText.innerHTML = `<p class='slideIn'>${sliders[i].mainText}</p>`;
secondText.innerHTML = `<p class='slideIn'>${sliders[i].secondText}</p>`;
secondPicture.innerHTML = `<img class='shadow-lg img-fluid slideIn' src='${sliders[i].secondPicture}'>`;
        } else {
mainText.innerHTML = `<p class='slideIn'>${sliders[i].mainText}</p>`;
secondText.innerHTML = `<p class='slideIn'>${sliders[i].secondText}</p>`;
secondPicture.innerHTML = `<img class='shadow-lg img-fluid slideIn' src='${sliders[i].secondPicture}'>`;
        }
});

};

createSlider();
// ANIMACJE - POJAWIANIE SIE BLOKOW


window.addEventListener("scroll", () => {
const firstCheckpoint = 100;
const secondCheckpoint = 300;
  const currentScroll = window.pageYOffset;
  if (currentScroll <= firstCheckpoint) {
    opacity = 0 - currentScroll / firstCheckpoint;
  } else if (currentScroll > firstCheckpoint && currentScroll < secondCheckpoint) {
    opacity = 0.4;
  } else {
    opacity = 1;
  }
  document.querySelector("#carouselExample").style.opacity = opacity;
});

window.addEventListener("scroll", () => {
const firstCheckpoint = 550;
const secondCheckpoint = 750;
  const currentScroll = window.pageYOffset;
  if (currentScroll <= firstCheckpoint) {
    opacity = 0 - currentScroll / firstCheckpoint;
  } else if (currentScroll > firstCheckpoint && currentScroll < secondCheckpoint) {
    opacity = 0.4;
  } else {
    opacity = 1;
  }
  document.querySelector("#carousel-footer").style.opacity = opacity;
  document.querySelector("#portfolio-heading").style.opacity = opacity;
});


window.addEventListener("scroll", () => {
const firstCheckpoint = 1500;
const secondCheckpoint = 1700;
  const currentScroll = window.pageYOffset;
  if (currentScroll <= firstCheckpoint) {
    opacity = 0 - currentScroll / firstCheckpoint;
  } else if (currentScroll > firstCheckpoint && currentScroll < secondCheckpoint) {
    opacity = 0.4;
  } else {
    opacity = 1;
  }
  document.querySelector("#blog-heading").style.opacity = opacity;
});

window.addEventListener("scroll", () => {
    const firstCheckpoint = 1550;
    const secondCheckpoint = 1750;
    const currentScroll = window.pageYOffset;
    if (currentScroll <= firstCheckpoint) {
        opacity = 0 - currentScroll / firstCheckpoint;
    } else if (currentScroll > firstCheckpoint && currentScroll < secondCheckpoint) {
        opacity = 0.4;
    } else {
        opacity = 1;
    }
    document.querySelector(".blog-section").style.opacity = opacity;
});

window.addEventListener("scroll", () => {
const firstCheckpoint = 1500;
const secondCheckpoint = 2300;
  const currentScroll = window.pageYOffset;
  if (currentScroll <= firstCheckpoint) {
    opacity = 0 - currentScroll / firstCheckpoint;
  } else if (currentScroll > firstCheckpoint && currentScroll < secondCheckpoint) {
    opacity = 0.4;
  } else {
    opacity = 1;
  }
  document.querySelector("#blog-footer").style.opacity = opacity;
  document.querySelector(".dolne-logo-container").style.opacity = opacity;
});

// KONIEC ANIMACJI BLOKOW

// SILNIK SLIDERA DO OFERTY
//
//const timer = ms => new Promise(res => setTimeout(res, ms))
//
//const offerOne = `Stworzę każdy <b>tekst</b>: na www, <b>na landing page, na media społecznościowe,</b> na bloga i inne.`;
//const offerTwo = `Napiszę pismo urzędowe, a także: <b>podanie, list gratulacyjny, podziękowanie, kondolencje i in.</b>`;
//const offerThree = `Zredaguję <b>Twój tekst,</b> sprawdzę pisownię, przecinki, sformatuję go wg Twoich potrzeb.`;
//const offerFour = `Z dostarczonych mi materiałów <b>zmontuję film promocyjny lub reklamowy.</b>`;
//const offerFive = `Dodam napisy do Twojego filmu.`;
//const offerSix = `Poprowadzę Twojego fanpage'a na Facebooku lub Instagramie, napiszę posty, będę moderować komantarze, utworzę grupę fanowską.`;
//const offerSeven = `Zrobię rozeznanie cenowe dot. potrzebnego Ci zakupu, zajmę się zamówieniami i kontaktem z usługowcami.`;
//const offerEight = `Stworzę bazę danych, bazy kontaktów, zdobędę dla Ciebie takie informacje, jakich potrzebujesz.`;
//
//const offerPool = [offerOne, offerTwo, offerThree, offerFour, offerFive, offerSix, offerSeven, offerEight];
//const offerPoolLg = [offerOne, offerTwo, offerThree, offerFour, offerFive, offerSix, offerSeven, offerEight, offerOne, offerTwo, offerThree];
//
//const offerSlides = document.getElementsByClassName('offer-slide');
//
//const offerArrowLeft = document.getElementById('offer-arrow-left');
//const offerArrowRight = document.getElementById('offer-arrow-right');
//
//
//
//async function offerSliderDisplay() {
//    while (true) {
//        const clientWidth = document.body.clientWidth;
//        
//        if (clientWidth >= 992) {
//                                    
//            for (let a = 0; a < 8; a++) {
//                offerArrowLeft.addEventListener('click', () => {
//                    if (a > 0){
//                    a = a - 2;
//                    }
//                    } );
//                
//                offerArrowRight.addEventListener('click', () => {
//                    a = a + 1;
//                } );
//                for (let i = 0; i < offerSlides.length; i++) {
//                    offerSlides[i].innerHTML = offerPoolLg[i + a];
//                }
//                
//                await timer(4000); 
//                
//            }
//        } else if (clientWidth < 992 && clientWidth >= 576) {
//            for (let a = 0; a < 7; a++) {
//                offerArrowLeft.addEventListener('click', () => {
//                    if (a > 0){
//                    a = a - 2;
//                    }
//                    } );
//                
//                offerArrowRight.addEventListener('click', () => {
//                    a = a + 1;
//                } );
//                for (let i = 0; i < offerSlides.length; i++) {
//                    offerSlides[i].innerHTML = offerPool[i + a];
//                    if (a == -1 || a == -2) {
//                        
//                };
//                }
//                await timer(4000);
//            }
//        } else {
//            for (let a = 0; a < 8; a++) {
//                offerArrowLeft.addEventListener('click', () => {
//                    if (a > 0){
//                    a = a - 2;
//                    }
//                    } );
//                
//                offerArrowRight.addEventListener('click', () => {
//                    a = a + 1;
//                } );
//                for (let i = 0; i < offerSlides.length; i++) {
//                    offerSlides[i].innerHTML = offerPool[i + a];
//                }
//                await timer(4000);
//            }
//        }
//    };
//}
//
//offerSliderDisplay();

//function offerAnimation() {
//    for (let slide of offerSlides){
//        slide.classList.add('offer-slide-animation');
//    }
//};
//
//offerAnimation();
//
//window.addEventListener('resize', () => {
//    for (let slide of offerSlides) {
//        console.log(slide.innerHTML);
//        slide.classList.remove('offer-slide-animation');
//        slide.classList.add('offer-slide-animation');
//        
//    }
//    
//});



$('#carouselExample').on('slide.bs.carousel', function (e) {

  
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 4;
    var totalItems = $('.carousel-item').length;
    
    if (idx >= totalItems-(itemsPerSlide-1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i=0; i<it; i++) {
            // append slides to end
            if (e.direction=="left") {
                $('.carousel-item').eq(i).appendTo('.carousel-inner');
            }
            else {
                $('.carousel-item').eq(0).appendTo('.carousel-inner');
            }
        }
    }
});


  $('#carouselExample').carousel({ 
                interval: 2000
        });


  $(document).ready(function() {
/* show lightbox when clicking a thumbnail */
    $('a.thumb').click(function(event){
      event.preventDefault();
      var content = $('.modal-body');
      content.empty();
        var title = $(this).attr("title");
        $('.modal-title').html(title);        
        content.html($(this).html());
        $(".modal-profile").modal({show:true});
    });

  });
