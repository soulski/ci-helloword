$( document ).ready(function() {

  $('.bottom').click(function () {
  	var score = $('.score-text').val();
  	var url = '/grade?score=' + score;

  	if (!score) {
  		$('.your-score-warn').text('Please insert your score');
  		$('#dialog-warn').dialog();
  	}
  	else {
			$.get( url, function( data ) {
			$('.your-score').text(data.grade);
  		$('#dialog').dialog();  
		});
  	}
  })
});