function validate(form,email) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var address = document.forms[form].elements[email].value;
    if(reg.test(address) == false) {
       alert('Incorrect email :(');
       return false;
    } else {
     $('#button').click(function(){go(50)});
  
     function go(nr) {
       $('.message').toggleClass('comein');
       $('.check').toggleClass('scaledown');
       $('#root').addClass('blur-back');
     }
    }
}
  
$('#ok').click(function(){go1(50)});
  
  function go1(nr) {
   $('.message').toggleClass('message-none');
   $('#root').removeClass('blur-back');
   $("#email").val("");
} 
  
// smooth scroll popup message
$(window).scroll(function(){
  $(".message").stop().animate({"marginTop": ($(window).scrollTop()) + "px", "marginLeft":($(window).scrollLeft()) + "px"}, "slow" );
});
var totaltext = "";
for (var i = 0; i < 100; i++) {
  totaltext += "scroll!<br />";
}

// menu burger
$(document).ready(function() {
	$('.menu-burger__header').click(function(){
        $('.menu-burger__header').toggleClass('open-menu');
        $('.nav-style-nav').toggleClass('open-menu');
	});
});

