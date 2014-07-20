$( document ).ready(function() {
	$('.your-score').text('B+++');
  $('.bottom').click(function () {
  	$('.your-score').text('A+++');
  	$( "#dialog" ).dialog();
  })
});