$( document ).ready(function() {
	$("#login").click(function(){
	    $("#myLogin").modal();
	  });
  	$('#openMyMenu').click(function(event){
  		event.preventDefault();
  		$('#main-menu').addClass('open');
  		$('#closeMenu').addClass('open');
  	});
  	$('#closeMenu').click(function(event) {
  		$('#main-menu').removeClass('open');
  		$(this).removeClass('open');
  	});
  	$('#main-menu ul li').find('ul').each(function(index, el) {
  		$(this).parent().append('<span class="far fa-angle-down show-submenu-mb"></span>');
  	
  	});
  	$('.show-submenu-mb').click(function(event) {
  		$(this).prev('ul').toggleClass('open');
	});
	$('a[data-dr="dropdown"]').click(function(event) {
		$(this).next().toggle('slow');
	});
	$('.home-banner').owlCarousel({
		items: 1,
	    loop:true,
	    margin:0,
	});
	$('.custom_dropdown').click(function () {
        $(this).attr('tabindex', 1).focus();
        $(this).toggleClass('active');
        $(this).find('.dropdown-menu').slideToggle(300);
    });
    $('.custom_dropdown').focusout(function () {
        $(this).removeClass('active');
        $(this).find('.dropdown-menu').slideUp(300);
    });
    $('.custom_dropdown .dropdown-menu li').click(function () {
        $(this).parents('.custom_dropdown').children('.select').find('div').html($(this).html());
        $(this).parents('.custom_dropdown').find('input').attr('value', $(this).attr('data-value'));
    });
    $('.change_step').each(function(index, el) {
    	$(this).click(function(event) {
    		event.preventDefault();
    		var step = $(this).attr('data-step');
    		if (step != '') {
    			$('.step').removeClass('active');
    			$(step).addClass('active');
    			$('.infor-step .title .lg-rs-title').removeClass('active');
    			$('.infor-step .group-bar .bar').removeClass('active');
    			$('.infor-step .title .lg-rs-title[data-step="'+step+'"]').addClass('active');
    			$('.infor-step .group-bar .bar[data-step="'+step+'"]').addClass('active');
    		}
    		
    	});
    });
    $('.bar_the .bar_thuc').each(function(index, el) {
    	var current = $(this).attr('data-value');
    	var max = $(this).attr('data-max');
    	var phantram = Math.round((current/max)*100);
    	$(this).css('width', phantram+'%');
    });
    
    $('.button_edit.edit').click(function(event) {
    	event.preventDefault();
    	$('form input[type=text]').attr('readonly', false);
    	$('form input[type=date]').attr('readonly', false);
    	$('form input[type=password]').attr('readonly', false);
    	$('form select').attr('disabled', false);

    	$('form input[type=text]').parent().removeClass('disable');
    	$('form input[type=date]').parent().removeClass('disable');
    	$('form input[type=password]').parent().removeClass('disable');
    	$('form select').parent().removeClass('disable');

    	$('.button_edit').css('display', 'none');
    	$('.button_edit_hd').css('display', 'inline-block');
    });
    $('.button_edit_hd').click(function(event) {
    	event.preventDefault();
    	$('form input[type=text]').attr('readonly', true);
    	$('form input[type=date]').attr('readonly', true);
    	$('form input[type=password]').attr('readonly', true);
    	$('form select').attr('disabled', true);

    	$('form input[type=text]').parent().addClass('disable');
    	$('form input[type=date]').parent().addClass('disable');
    	$('form input[type=password]').parent().addClass('disable');
    	$('form select').parent().addClass('disable');

    	$('.button_edit').css('display', 'inline-block');
    	$(this).css('display', 'none');
    });
	$('.slides-partner').owlCarousel({
		loop:true,
	    margin:30,
	    dots: false,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:2,
	        },
	        600:{
	            items:3,
	        },
	        768:{
	            items:4,
	        },
	        1024:{
	            items:6,
	        }
	    }
	});
	$('.slides-hot-deals').owlCarousel({
		loop:true,
	    margin:30,
	    dots: false,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:1,
	        },
	        600:{
	            items:2,
	        },
	        768:{
	            items:2,
	        },
	        1024:{
	            items:3,
	        }
	    }
	});
	$('.slides-news').owlCarousel({
		loop:true,
	    margin:30,
	    dots: false,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:1,
	        },
	        600:{
	            items:2,
	        },
	        768:{
	            items:2,
	        },
	        1024:{
	            items:3,
	        }
	    }
	});
	$('.slides-comments').owlCarousel({
		loop:true,
	    margin:30,
	    dots: true,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:1,
	        },
	        600:{
	            items:2,
	        },
	        768:{
	            items:2,
	        },
	        1024:{
	            items:3,
	        }
	    }
	});
	$('.slides-img-store').owlCarousel({
		loop:true,
	    margin:30,
	    dots: false,
	    nav: true,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:1,
	        },
	        600:{
	            items:2,
	        },
	        768:{
	            items:2,
	        },
	        1024:{
	            items:3,
	        }
	    }
	});
	
	$('.tab-list-item').each(function(index, el) {
		$(this).click(function(event) {
			$('.tab-list-item').removeClass('active');
			var tag = $(this).attr('data-tag');
			var tab = $(this).parent().attr('data-tab');
			$(tab).children('.tab-content').css('display','none');
			$(this).addClass('active');
			$(tab).children(tag).css('display','block');
		});
	});
	$('.tab-list .tab-list-item:first-child').trigger('click');


	$('.quantity').each(function() {
	  var spinner = $(this),
	    input = spinner.find('input[type="number"]'),
	    btnUp = spinner.find('.quantity-up'),
	    btnDown = spinner.find('.quantity-down'),
	    min = input.attr('min'),
	    max = input.attr('max');

	  btnUp.click(function() {
	    var oldValue = parseFloat(input.val());
	    if (oldValue >= max) {
	      var newVal = oldValue;
	    } else {
	      var newVal = oldValue + 1;
	    }
	    spinner.find("input").val(newVal);
	    spinner.find("input").trigger("change");
	  });

	  btnDown.click(function() {
	    var oldValue = parseFloat(input.val());
	    if (oldValue <= min) {
	      var newVal = oldValue;
	    } else {
	      var newVal = oldValue - 1;
	    }
	    spinner.find("input").val(newVal);
	    spinner.find("input").trigger("change");
	  });
	});
});

$(document).ready(function() {
  	var sync1 = $("#sync1");
  	var sync2 = $("#sync2");
  	var slidesPerPage = 4;
  	var syncedSecondary = true;

	sync1.owlCarousel({
		items : 1,
		slideSpeed : 2000,
		autoplay: false,
		dots: false,
		loop: true,
		responsiveRefreshRate : 200,
	}).on('changed.owl.carousel', syncPosition);

	sync2.on('initialized.owl.carousel', function () {
	  sync2.find(".owl-item").eq(0).addClass("current");
	})
	.owlCarousel({
		items : slidesPerPage,
		margin: 20,
		dots: false,
		smartSpeed: 200,
		slideSpeed : 500,
		slideBy: slidesPerPage,
		responsiveRefreshRate : 100
	}).on('changed.owl.carousel', syncPosition2);

  	function syncPosition(el) {
	    var count = el.item.count-1;
	    var current = Math.round(el.item.index - (el.item.count/2) - .5);
	    
	    if(current < 0) {
	      current = count;
	    }
	    if(current > count) {
	      current = 0;
	    }

	    sync2
	      .find(".owl-item")
	      .removeClass("current")
	      .eq(current)
	      .addClass("current");
	    var onscreen = sync2.find('.owl-item.active').length - 1;
	    var start = sync2.find('.owl-item.active').first().index();
	    var end = sync2.find('.owl-item.active').last().index();
	    
	    if (current > end) {
	      sync2.data('owl.carousel').to(current, 100, true);
	    }
	    if (current < start) {
	      sync2.data('owl.carousel').to(current - onscreen, 100, true);
	    }
 	}
  
  	function syncPosition2(el) {
	    if(syncedSecondary) {
	      var number = el.item.index;
	      sync1.data('owl.carousel').to(number, 100, true);
	    }
  	}
  	sync2.on("click", ".owl-item", function(e){
	    e.preventDefault();
	    var number = $(this).index();
	    sync1.data('owl.carousel').to(number, 300, true);
  	});
});
$(window).on('load', function(event) {
	$('#loader').delay(1000).fadeOut('fast');
});
