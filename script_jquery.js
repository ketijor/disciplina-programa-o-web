//$(seletor).ação();

$(document).ready(function(){
//ou
$(function(){
	$('button').click(function(){
//		$('h1').hide();
	});
});
});


$(function(){
	$('button').click(function(){
		$('#unico').css("color", "red");
	});
});


$(function(){
	$('#azul').click(function(){
		$('p').css("color", "blue");
		$('p').css("background-color", "green");
		$('p').fadeOut('fast');
		$('p').delay(3000);
		$('p').fadeIn(5000);
	});

	$('#vermelho').click(function(){
		$('p').css("color", "red");
		$('p').css("background-color", "purple");
		$('p').fadeOut('slow');
		$('p').delay(3000);
		$('p').fadeIn('slow');
		$('#mensagem').text("Cor alterada com sucesso");
		$('#mensagem').css('color','red');
		$('#mensagem').css('border','1px solid red');
		$('#mensagem').delay(3000);
		$('#mensagem').fadeOut('fast');
		//ou Encadeamento em bloco
		$('#mensagem')
			.text("Cor alterada com sucesso")
			.css('color','red')
			.css('border','1px solid red')
			.delay(3000)
			.fadeOut('fast')
			.addClass('green')
		$('button').removeClass('red');
		//ou Declaração múltipla de CSS
		$('#mensagem')
			.css({color:'red', border:'1px solid red', backgroundColor:'#F08080'})
	});
});

$(function(){
	$('#l1').click(function(){
		$('#i1').show();
		$('#i2').hide();
		$('#i3').hide();
		$('#i4').hide();
	});

	$('#l2').click(function(){
		$('#i1').hide();
		$('#i2').show();
		$('#i3').hide();
		$('#i4').hide();
	});

	$('#l3').click(function(){
		$('#i1').hide();
		$('#i2').hide();
		$('#i3').show();
		$('#i4').hide();
	});

	$('#l4').click(function(){
		$('#i1').hide();
		$('#i2').hide();
		$('#i3').hide();
		$('#i4').show();
	});
});