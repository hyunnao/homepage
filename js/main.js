$(document).ready(function(){
  // header hamburger-menu
  $('.hamburger-menu').click(function() {
    $(this).toggleClass('active');
    $('.menu').toggleClass('active');
  });

  // project 
  $('.project-list').bxSlider({
    minSlides: 2,
    maxSlides: 2,
    slideWidth: 500,
    slideMargin: 24,
    ticker: true,
    speed: 50000
  });

  
});

// header 색상
$(window).scroll(function(){
  let header = $('header');
  let h1 = $(document).scrollTop();
  let offset1 = $('.what').offset().top;
  let offset2 = $('.footer').offset().top;
  
  if(h1 === offset1 || h1 === offset2) { 
    header.addClass('down');
  } else {
    header.removeClass('down');
  };
});

$(window).scroll(function(){
  let h2 = $(document).scrollTop();
  let offset3 = $('.project').offset().top;


  //숫자 카운트 애니메이션
  if(h2 === offset3) { 
    let countBox = document.querySelector('.num');
    let count = 0;
    let num = 400;
    
    let counting = setInterval(function () {
      if (count >= num) {
            count = num;
            clearInterval(counting);
          } else {
            count += 1;
          }
          countBox.innerHTML = new Intl.NumberFormat().format(count);
    }, 10);
  };

});


// fullpage
window.addEventListener("wheel", function(e){
  e.preventDefault();
},{passive : false});

let mhtml = $("html");
let page = 1;
 
mhtml.animate({scrollTop : 0},100);
 

$(window).on("wheel", function(e) {
  if(mhtml.is(":animated")) return;
  if(e.originalEvent.deltaY > 0) {
      if(page == 6) return;
      page++;
  } else if(e.originalEvent.deltaY < 0) {
      if(page == 1) return;
      page--;
  }
  var posTop =(page-1) * $(window).height();
  mhtml.animate({scrollTop : posTop});
});


if (window.matchMedia("(max-width: 480px)").matches) {
  // what
  $('.what-list').bxSlider({
    auto: true,
    infiniteLoop: true,
    controls: false,
    minSlides: 1,
    maxSlides: 1,
    slideWidth: 182,
    pager: true,
    
  });

  // reference
	$('.bxslider').bxSlider({
    auto: true,
    autoControls: false,
    // stopAutoOnClick: true,
    pager: true,
    infiniteLoop: true,
    controls: false,
    minSlides: 1,
    speed: 500,
    pause: 2000,
    autoDelay: 2000,
    slideWidth: 1000,
	});

} else if (window.matchMedia("(max-width: 768px)").matches) {
  
  // what 
  $('.what-list').bxSlider({
    auto: true,
    infiniteLoop: true,
    controls: false,
    minSlides: 1,
    maxSlides: 1,
    slideWidth: 300,
    slideMargin: 20,
    pager: true,
  });

  // reference
	$('.bxslider').bxSlider({
    auto: true,
    controls: false,
    pager: true,
    infiniteLoop: true,
    controls: false,
    minSlides: 1,
    speed: 500,
    pause: 2000,
    autoDelay: 2000,
    slideWidth: 644,
	});
} else {
  // what 
  $('.what-list').bxSlider({
    auto: false,
    infiniteLoop: false,
    controls: false,
    minSlides: 5,
    maxSlides: 5,
    slideWidth: 200,
    pager: false,
  });

  // reference
	$('.bxslider').bxSlider({
    auto: true,
    autoControls: false,
    // stopAutoOnClick: true,
    pager: true,
    infiniteLoop: true,
    controls: false,
    minSlides: 1,
    speed: 500,
    pause: 2000,
    autoDelay: 2000,
    slideWidth: 1200,
	});

};