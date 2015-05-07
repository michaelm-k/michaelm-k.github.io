if ($( "#content" ).has( "#name" )){
	$("html, body").css("overflow", "hidden");
}

/* START: RESUME/BLOG LINK */
	$( "#tab2, #tab5" )
	.mouseover(function() { 
		$(this).animate( {color: '#bdbcae'}, 200 ); 		
	})
	.mouseout(function() {
			$(this).stop(true).animate( {color: '#ffffff'}, 200 ); 			
	});
	
	$("#tab2, #tab5").click(function() {    
		$(this).stop(true).animate( {color: '#ffffff'}, 200 );     
	});
/* END: RESUME/BLOG LINK */

/* START: SOCIAL ICONS */ 
var clicked=0;
var hovering=0;
$( ".navbar-inverse .navbar-brand" ).hover(
  function() {
    $(this).animate( {color: '#bdbcae '}, "200" );
	hovering=1;
  }, function() {
    $(this).stop(true).animate( {color: '#ffffff'}, "200" );
	hovering=0;
  }
);
$( ".navbar-inverse .navbar-brand" ).mousedown(function() {
		$(this).animate( {color: '#002e63 '}, "50" ); 
});
$(".navbar-inverse .navbar-brand").click(function() {   
	clicked=1;
	if (hovering==1){
		$(this).animate( {color: '#bdbcae '}, "200" );
	} else {
		$(this).animate( {color: '#ffffff '}, "50" ); 	
	}
	   
});

$( ".static-footer .fa-soundcloud, .static-footer .fa-stack-overflow, .static-footer .fa-github-alt, .static-footer .fa-linkedin" )
	.mouseover(function() {  
		clicked=0;
		$(this).animate( {color: '#bdbcae'}, "slow" ); 
	})
	.mouseout(function() {
		if (clicked==0){
			$(this).stop(true).animate( {color: '#ffffff'}, "slow" );
		}	   
	});
	
$(".static-footer .fa-soundcloud, .static-footer .fa-stack-overflow, .static-footer .fa-github-alt, .static-footer .fa-linkedin").click(function() {   
	clicked=1;	  
	$(this).stop(true).animate( {color: '#ffffff'}, "slow" );     
});
/* END: SOCIAL ICONS */ 

  
var counter = 0;
var scrolling=false;
var scrolls1=0;
var scrolls2=0;
var hovering=0;
var scrollingTop=0;


const EMPTY_COUNTER = 0, FULL_COUNTER = 2;

var shouldOpen = function () {
    return counter === FULL_COUNTER;
};

var resetCounter = function () {
    counter = EMPTY_COUNTER;
};

var incrementCounter = function () {
    counter++;
};

var scrollTop = function () {	 
	$('html, body').stop(true).animate({scrollTop : 0},800);	
};

(function() {        
    var timer;
    $(window).bind('scroll',function () {
        clearTimeout(timer);
        timer = setTimeout( refresh , 150 );
		scrolling=true;
    });
    var refresh = function () { 
        scrolling=false;
		scrollingTop=0;
		scrolls1=0;
		scrolls2=0;
    };
})();

$(".navbar-inverse .navbar-nav > li > a").click(function() { 
	if ($(this).closest('li').hasClass('active')) {
		if($(window).scrollTop() !== 0 && scrolling==false) {	
			scrollTop();
		}
	} 
}); 

/* START: NAVBAR TOGGLE BTN */
$('.navbar-toggle').click(function() {
    if (!$('#tab4').is(":visible")) {
		$(this).addClass('menuActive');
		 $( ".navbar-inverse" ).css( "opacity", "1" ); 
	} else {		
		$(this).removeClass('menuActive');	
		$( ".navbar-inverse" ).css( "opacity", "0.95" ); 
	}	
});
$( ".navbar-toggle" )
	.mouseover(function() {  
		$(this).addClass('menuHover');
	})
	.mouseout(function() {
		$(this).removeClass('menuHover');	   
	});

/* END: NAVBAR TOGGLE BTN */

/* START: LEAVE WINDOW */
function addEvent(obj, evt, fn) {
    if (obj.addEventListener) {
        obj.addEventListener(evt, fn, false);
    }
    else if (obj.attachEvent) {
        obj.attachEvent("on" + evt, fn);
    }
}
addEvent(window,"load",function(e) {
    addEvent(document, "mouseout", function(e) {
        e = e ? e : window.event;
        var from = e.relatedTarget || e.toElement;
        if (!from || from.nodeName == "HTML") {
            $("span").stop(true).animate( {color: '#ffffff'}, "200" ); 
			$("a.writer").removeClass( "active" );
        }
    });
});
/* END: LEAVE WINDOW */

function loadAbout() {
	//START: BLINKING CAPTION
	var $el = $('#photocap'),
	timeOut,
	blinkcount = 0;
	
	(function blinkIt() {   
		var humanize = Math.round(Math.random() * (200 - 30)) + 30;
		timeOut = setTimeout(function() {
			$($el).animate({opacity:0},200,"linear",function(){
				$(this).animate({opacity:1},200);
				blinkcount++;
			});
			
			blinkIt();	
			if (blinkcount == 2) {
				clearTimeout(timeOut);
			}							
		}, humanize);
	}());
	//END: BLINKING CAPTION	
	
	setTimeout(function(){
		$("#photocap").attr("href", "http://genius.com/Kendrick-lamar-the-art-of-peer-pressure-lyrics");
		$("#photocap").attr("target","_blank");
		$( "#photocap" )
		.mouseover(function() { 
			$(this).animate( {color: '#000000'}, 200 ); 		
		})
		.mouseout(function() {
			$(this).stop(true).animate( {color: '#bdbcae'}, 200 ); 			
		});
	},2000);
}
function loadWork() {
	$( "#storyimg" )
	.mouseover(function() { 
		$(this).animate( {opacity: '1'}, 1000 ); 		
	})
	.mouseout(function() {
		$(this).stop(true).animate( {opacity: '0.5'}, 1000 ); 			
	});
}
function loadContact() {
	$("#dave").stop(true).animate( {opacity: '1'}, 2000); 
	
	$('#content-text .fa-university, #content-text .fa-stack-overflow, #content-text .fa-linkedin-square, #content-text .fa-github-square').addClass('animated rubberBand');
}

/* START: ABOUT & CONTACT LINKS */
$(".navbar-inverse .navbar-nav > li > a").click(function() { 
	$("html, body").css("overflow", "visible");
	if (!$(event.target).closest("#tab2").length && !$(event.target).closest("#tab5").length) {	
		if ($(event.target).closest("#tab1").length && !$(this).closest('li').hasClass( "active" )) {
			if ($('li.active a').attr('id') == "tab4" || $('li.active a').attr('id') == "tab3") {
				event.preventDefault();
				$( "#content" ).css( "position", "relative" ); 
				$(".custom-wrapper").css("overflow", "hidden");
				$("#content").stop(true).animate({left:'+110%'}, 500, function() {
					$('#content').load('about.html #content', function() {//ABOUT.HTML
						window.history.replaceState("", "", '/about');
						var hiddenDiv = document.getElementById('content');
						var docWidth = window.innerWidth;
						hiddenDiv.style.position = 'relative';
						hiddenDiv.style.display = 'inline-block';
						hiddenDiv.style.left = -docWidth + "px";
						$(".custom-wrapper").css("overflow", "hidden");
						$("#content").animate({left:'0px'}, 500, function(){ //.stop(true) isn't present here because it made it possible to glitch shit
														
							if($(window).scrollTop() !== 0 && scrolling==false) {	
								scrollTop();
							}
							//$("#photocap").css("display", "block");
							
							loadAbout();
							
						});
					});
				});
				$('li').removeClass( 'active' );
				$(this).closest('li').addClass( 'active' );
				
			} else {
				event.preventDefault();
				$( "#content" ).css( "position", "relative" ); 
				$(".custom-wrapper").css("overflow", "hidden");
				$("#content").stop(true).animate({left:'-110%'}, 500, function() {
					$('#content').load('about.html #content', function() {//ABOUT.HTML
						window.history.replaceState("", "", '/about');
						var hiddenDiv = document.getElementById('content');
						var docWidth = window.innerWidth;
						hiddenDiv.style.position = 'relative';
						hiddenDiv.style.display = 'inline-block';
						hiddenDiv.style.left = docWidth+'px';
						$(".custom-wrapper").css("overflow", "hidden");
						$("#content").animate({left:'0px'}, 500, function() {
													
							if($(window).scrollTop() !== 0 && scrolling==false) {	
								scrollTop();
							}
							//$("#photocap").css("display", "block");	
							loadAbout();					
						});
					});
				});
				$('li').removeClass( 'active' );
				$(this).closest('li').addClass( 'active' );
			}
					
		} else if ($(event.target).closest("#tab4").length && !$(this).closest('li').hasClass( "active" )){
			event.preventDefault();
			$( "#content" ).css( "position", "relative" ); 
			$(".custom-wrapper").css("overflow", "hidden");
				$("#content").stop(true).animate({left:'-110%'}, 500, function() {
					$('#content').load('contact.html #content', function() {//CONTACT.HTML 	
						window.history.replaceState("", "", '/contact');
						var hiddenDiv = document.getElementById('content');
						var docWidth = window.innerWidth;
						hiddenDiv.style.position = 'relative';
						hiddenDiv.style.display = 'block';
						hiddenDiv.style.left = docWidth+'px';
						$(".custom-wrapper").css("overflow", "hidden");
						$("#content").animate({left:'0px'}, 500, function(){
							
							
							loadContact();
							if($(window).scrollTop() !== 0 && scrolling==false) {	
								scrollTop();
							}
							
						});					
					});
				});
				$('li').removeClass( 'active' );
				$(this).closest('li').addClass( 'active' );
		} else if ($(event.target).closest("#tab3").length && !$(this).closest('li').hasClass( "active" )) {
			if ($('li.active a').attr('id') == "tab4") {
				event.preventDefault();
				$( "#content" ).css( "position", "relative" ); 
				$(".custom-wrapper").css("overflow", "hidden");
				$("#content").stop(true).animate({left:'+110%'}, 500, function() {
					$('#content').load('work.html #content', function() {//WORK.HTML
						window.history.replaceState("", "", '/work');
						var hiddenDiv = document.getElementById('content');
						var docWidth = window.innerWidth;
						hiddenDiv.style.position = 'relative';
						hiddenDiv.style.display = 'inline-block';
						hiddenDiv.style.left = -docWidth + "px";
						$(".custom-wrapper").css("overflow", "hidden");
						
						loadWork();
						
						$("#content").animate({left:'0px'}, 500, function() {
							
							if($(window).scrollTop() !== 0 && scrolling==false) {	
								scrollTop();
							}	
						});
					});
				});
				$('li').removeClass( 'active' );
				$(this).closest('li').addClass( 'active' );
			} else {
				event.preventDefault();
				$( "#content" ).css( "position", "relative" ); 
				$(".custom-wrapper").css("overflow", "hidden");
				$("#content").stop(true).animate({left:'-110%'}, 500, function() {
					$('#content').load('work.html #content', function() {//WORK.HTML
						window.history.replaceState("", "", '/work');
						var hiddenDiv = document.getElementById('content');
						var docWidth = window.innerWidth;
						hiddenDiv.style.position = 'relative';
						hiddenDiv.style.display = 'inline-block';
						hiddenDiv.style.left = docWidth + "px";
						$(".custom-wrapper").css("overflow", "hidden");
						
						loadWork();

						$("#content").animate({left:'0px'}, 500, function() {
							if($(window).scrollTop() !== 0 && scrolling==false) {	
								scrollTop();
							}		
						});
					});
				});
				$('li').removeClass( 'active' );
				$(this).closest('li').addClass( 'active' );
			}
		}
	}	
});
/* END: ABOUT & CONTACT LINKS */
	
/* START: HOME */
	/* START: SKIP_INTRO */
	var skipped=false;
	var tooLatetoSkip=false;
	$( ".skip_intro" ).css( "cursor", "pointer" );
	$('.skip_intro').animate({opacity:1}, 2000); 

	$(".skip_intro").click(function() {
		$(".skip_intro").addClass( 'active' );
	});

	$( ".skip_intro" )
	.mouseover(function() {   
		$(".skip_intro").addClass( "active" );
	})
	.mouseout(function() {
		$(".skip_intro").removeClass( "active" );
	});
	$(".skip_intro").click(function() { 
		if (tooLatetoSkip==false){
			skipped=true;
			$('#content').load('about.html #content', function() {
				window.history.replaceState("", "", '/about');		
				$("#content").css("display", "none");
				$( "#content" ).fadeIn( "slow" );
				$('.navbar-inverse').removeClass('slideIn');		
				$("html, body").css("overflow", "");
				loadAbout();
				$("#tab1").parent().addClass('active');
				setTimeout(function(){
					$(".static-footer").slideToggle();
				},500);	
			});
		}	
	});
	
	setTimeout(function(){
		tooLatetoSkip=true;
		$('.skip_intro').animate({opacity:0}, 2000);
		$( ".skip_intro" ).css( "cursor", "default" );	
	},15000);
	/* END:  SKIP_INTRO */

	/* START: QUOTE */
	setTimeout(function(){
		$( "a.writer" ).css( "cursor", "pointer" );
		$('.writer').animate({opacity:1}, 2000); 
	},15000);

	$("a.writer").click(function() {
		$("a.writer").addClass( 'active' );
	});

	$( "a.writer" )
	.mouseover(function() {   
		$("a.writer").addClass( "active" );
	})
	.mouseout(function() {
		$("a.writer").removeClass( "active" );
	});
	/* END: QUOTE */

	$('#name').animate({opacity:1}, 1000, function() {});
 /* END: HOME */
 
/* START: LEAVE PAGE */  
  $(window).on("blur focus", function(e) {
    var prevType = $(this).data("prevType");

    if (prevType != e.type) {   //  reduce double fire issues
        switch (e.type) {
            case "blur":
                $("a.writer").removeClass( "active" );
				hovering=0;
                break;
            case "focus":
                 $("a.writer").removeClass( "active" );
				 hovering=0;
                break;
        }
    }
    $(this).data("prevType", e.type);
});
/* END: LEAVE PAGE */ 

if ($('li.active a').attr('id') == "tab4" || $('li.active a').attr('id') == "tab3" || $('li.active a').attr('id') == "tab1") {
	$("#content").css("display", "none");
	$( "#content" ).fadeIn( "slow" );
	$('.navbar-inverse').removeClass('slideIn');		
	$("html, body").css("overflow", "");
		
	//START: #tab1-specific
		loadAbout();
	//END: #tab1specific
	
	//START: #tab3-specific
		loadWork();
	//END: #tab3-specific
	
	//START: #tab4-specific
		loadContact();
	//END: #tab4-specific

	setTimeout(function(){
		$(".static-footer").slideToggle();
	},500);
} else {
	setTimeout(function(){
		if (skipped==false) {
			$('.navbar-inverse').removeClass('slideIn');
		}		
	},15000);
	setTimeout(function(){
		if (skipped==false) {
			$(".static-footer").slideToggle();
		}		
	},15500);
}