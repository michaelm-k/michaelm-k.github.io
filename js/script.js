if ($( "#content" ).has( "#name" )){
	$("html, body").css("overflow", "hidden");
}

/* START: RESUME LINK */
$( "#tab2" )
	.mouseover(function() { 
		$(this).animate( {color: '#bdbcae'}, 200 ); 		
	})
	.mouseout(function() {
			$(this).stop(true).animate( {color: '#ffffff'}, 200 ); 			
	});
	
$("#tab2").click(function() {    
	$(this).stop(true).animate( {color: '#ffffff'}, 200 );     
});
/* END: RESUME LINK */

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

$( ".fa-soundcloud" )
	.mouseover(function() {  
		clicked=0;
		$(this).animate( {color: '#bdbcae'}, "slow" ); 
	})
	.mouseout(function() {
		if (clicked==0){
			$(this).stop(true).animate( {color: '#ffffff'}, "slow" );
		}	   
	});
	
$(".fa-soundcloud").click(function() {   
	clicked=1;	  
	$(this).stop(true).animate( {color: '#ffffff'}, "slow" );     
});

$( ".fa-stack-overflow" )
	.mouseover(function() { 
		clicked=0;
		$(this).animate( {color: '#bdbcae'}, "slow" ); 		
	})
	.mouseout(function() {
		if (clicked==0){
			$(this).stop(true).animate( {color: '#ffffff'}, "slow" ); 
		}	
	});
	
$(".fa-stack-overflow").click(function() {   
	clicked=1;	  
	$(this).stop(true).animate( {color: '#ffffff'}, "slow" );       
});
		
$( ".fa-github-alt" )
	.mouseover(function() {  
		clicked=0;
		$(this).animate( {color: '#bdbcae'}, "slow" ); 
	})
	.mouseout(function() {
		if (clicked==0){
			$(this).stop(true).animate( {color: '#ffffff'}, "slow" ); 
		}	 
	});

$(".fa-github-alt").click(function() {   
	clicked=1;	  
	$(this).stop(true).animate( {color: '#ffffff'}, "slow" );       
});
	
$( ".fa-linkedin" )
	.mouseover(function() {  
		clicked=0;  
		$(this).animate( {color: '#bdbcae'}, "slow" ); 
	})
	.mouseout(function() {
		if (clicked==0) {
			$(this).stop(true).animate( {color: '#ffffff'}, "slow" ); 
		}	  
	});
	
$(".fa-linkedin").click(function() {   
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

/* START: ABOUT & CONTACT LINKS */
$(".navbar-inverse .navbar-nav > li > a").click(function() { 
	$("html, body").css("overflow", "visible");
	if (!$(event.target).closest("#tab2").length) {	
		if ($(event.target).closest("#tab1").length && !$(this).closest('li').hasClass( "active" )) {
			if ($('li.active a').attr('id') == "tab4" || $('li.active a').attr('id') == "tab3") {
				event.preventDefault();
				$( "#content" ).css( "position", "relative" ); 
				$(".custom-wrapper").css("overflow", "hidden");
				$("#content").stop(true).animate({left:'+110%'}, 2000, function() {
					$('#content').load('about.html #content', function() {//ABOUT.HTML
						var hiddenDiv = document.getElementById('content');
						var docWidth = window.innerWidth;
						hiddenDiv.style.position = 'relative';
						hiddenDiv.style.display = 'inline-block';
						hiddenDiv.style.left = -docWidth + "px";
						$(".custom-wrapper").css("overflow", "hidden");
						$("#content").stop(true).animate({left:'0px'}, 2000, function(){
														
							if($(window).scrollTop() !== 0 && scrolling==false) {	
								scrollTop();
							}
							
							$( "#photocap" )
							.mouseover(function() { 
								$(this).animate( {color: '#000000'}, 200 ); 		
							})
							.mouseout(function() {
								$(this).stop(true).animate( {color: '#bdbcae'}, 200 ); 			
							});
							
							$("#photocap").click(function() {    
								$(this).stop(true).animate( {color: '#bdbcae'}, 200 );     
							});
						});
					});
				});
				$('li').removeClass( 'active' );
				$(this).closest('li').addClass( 'active' );
				
			} else {
				event.preventDefault();
				$( "#content" ).css( "position", "relative" ); 
				$(".custom-wrapper").css("overflow", "hidden");
				$("#content").stop(true).animate({left:'-110%'}, 2000, function() {
					$('#content').load('about.html #content', function() {//ABOUT.HTML
						var hiddenDiv = document.getElementById('content');
						var docWidth = window.innerWidth;
						hiddenDiv.style.position = 'relative';
						hiddenDiv.style.display = 'inline-block';
						hiddenDiv.style.left = docWidth+'px';
						$(".custom-wrapper").css("overflow", "hidden");
						$("#content").stop(true).animate({left:'0px'}, 2000, function() {
													
							if($(window).scrollTop() !== 0 && scrolling==false) {	
								scrollTop();
							}
							$("#photocap").css("display", "block");
							$( "#photocap" )
							.mouseover(function() { 
								$(this).animate( {color: '#000000'}, 200 ); 		
							})
							.mouseout(function() {
								$(this).stop(true).animate( {color: '#bdbcae'}, 200 ); 			
							});
							
							$("#photocap").click(function() {    
								$(this).stop(true).animate( {color: '#bdbcae'}, 200 );     
							});
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
				$("#content").stop(true).animate({left:'-110%'}, 2000, function() {
					$('#content').load('contact.html #content', function() {////CONTACT.HTML 				
						var hiddenDiv = document.getElementById('content');
						var docWidth = window.innerWidth;
						hiddenDiv.style.position = 'relative';
						hiddenDiv.style.display = 'inline-block';
						hiddenDiv.style.left = docWidth+'px';
						$(".custom-wrapper").css("overflow", "hidden");
						$("#content").stop(true).animate({left:'0px'}, 2000, function(){
							
							if($(window).scrollTop() !== 0 && scrolling==false) {	
								scrollTop();
							}
							
							$("#badge1").css("display", "");
							$("#badge2").css("display", "");
							$("#badge3").css("display", "");
							$("#badge4").css("display", "");
							$("#badge1").stop(true).animate( {opacity: '1'}, 4000); 
							$("#badge2").stop(true).animate( {opacity: '1'}, 5000); 
							$("#badge3").stop(true).animate( {opacity: '1'}, 6000); 
							$("#badge4").stop(true).animate( {opacity: '1'}, 7000); 
							
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
				$("#content").stop(true).animate({left:'+110%'}, 2000, function() {
					$('#content').load('work.html #content', function() {//WORK.HTML
					
						var hiddenDiv = document.getElementById('content');
						var docWidth = window.innerWidth;
						hiddenDiv.style.position = 'relative';
						hiddenDiv.style.display = 'inline-block';
						hiddenDiv.style.left = -docWidth + "px";
						$(".custom-wrapper").css("overflow", "hidden");
						
						$( "#storyimg" )
						.mouseover(function() { 
							$(this).animate( {opacity: '1'}, 1000 ); 		
						})
						.mouseout(function() {
							$(this).stop(true).animate( {opacity: '0.5'}, 1000 ); 			
						});
						
						$("#content").stop(true).animate({left:'0px'}, 2000, function() {
							
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
				$("#content").stop(true).animate({left:'-110%'}, 2000, function() {
					$('#content').load('work.html #content', function() {//WORK.HTML
															
						var hiddenDiv = document.getElementById('content');
						var docWidth = window.innerWidth;
						hiddenDiv.style.position = 'relative';
						hiddenDiv.style.display = 'inline-block';
						hiddenDiv.style.left = docWidth + "px";
						$(".custom-wrapper").css("overflow", "hidden");
						
						$( "#storyimg" )
						.mouseover(function() { 
							$(this).animate( {opacity: '1'}, 1000 ); 		
						})
						.mouseout(function() {
							$(this).stop(true).animate( {opacity: '0.5'}, 1000 ); 			
						});

						$("#content").stop(true).animate({left:'0px'}, 2000, function() {
							
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
setTimeout(function(){
$('.navbar-inverse').removeClass('slideIn');
},15000);
setTimeout(function(){
 $(".static-footer").slideToggle();
},15450);
