
var contador=1;
var contador2=1;



$(document).ready(function(){

$('.icon-menu').click(function(){

if(contador==1){

$('#content').css('background', '#ffffff');

			$('nav').animate({

			left:'0%'
 
			})
		contador=0;
}else{
		contador=1;
			$('nav').animate({

			left:'-100%'

			})
}

	});

$('.icon-happy').click(function(){
if(contador2==1){


$('.interfaz_registro').slideToggle();
			
		contador2=0;
}else{
		contador2=1;
			$('.interfaz_registro').slideToggle();
}


});
//submenu
$('.submenu').click(function(){
$(this).children('.desplegar').slideToggle();
});
 
	$('.ir-arriba').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});
 
	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.ir-arriba').slideDown(300);
		} else {
			$('.ir-arriba').slideUp(300);
		}
	});
 
});




