$(function(){
	$('.moods li').on('click', function(){
		var selectedMood = $(this).attr('data-mood');
	
		setTimeout(function(){
			$('.moods').fadeOut();
			$('.subject').fadeIn().find('.mood').text(selectedMood);
		}, 300);
	});

	$('#submit-btn').on('click', function(e){
		e.preventDefault();
		setTimeout(function() {
			$('.subject').fadeOut();
			$('.play').fadeIn();
			loadingAnimation();
		}, 200);
	});

	$('.ready').on('click', function(e) {
		e.preventDefault();
	});

});

function loadingAnimation() {
	var ellipsis = $('.play span');
	$(ellipsis[0]).addClass('show');

	var next = 1;
	setInterval(function() {
		$(ellipsis[next]).addClass('show');	
		if (next > 0 && next < ellipsis.length) {
			next++;
		} else {
			$(ellipsis).removeClass('show');
			$(ellipsis[0]).addClass('show');
			next = 1;
		}
	}, 500);

	setTimeout(partyTime, 4000);
};

function partyTime() {
	$('.loading').hide();
	$('.ready').fadeIn();
};