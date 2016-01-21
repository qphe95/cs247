function initPage(){
	$('#check-in-input').focusin(function() {
		$('.date-row').removeClass('date-container-hidden');
	});
	$('#check-in-input').focusout(function() {
		$('.date-row').addClass('date-container-hidden');
	});

	$('#check-out-input').focusin(function() {
		$('.date-row').removeClass('date-container-hidden');
	});
	$('#check-out-input').focusout(function() {
		$('.date-row').addClass('date-container-hidden');
	});

	$('.more-options-helper').on('click', function(){
		$(".more-options-helper .glyphicon-triangle-bottom").toggleClass("glyphicon-triangle-top");
	});
}

window.onload = initPage();