$(function(){
	$('.moods li').on('click', function(){
		var selectedMood = $(this).attr('data-mood');
	
		setTimeout(function(){
			$('.moods').fadeOut();
			$('.subject').fadeIn().find('.mood').text(selectedMood);
		}, 300);
	});

	initEvents();
});

function loadingAnimation() {
	var ellipsis = $('.play span');
	$(ellipsis[0]).addClass('show');

	var next = 1;
	loading = setInterval(function() {
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
	clearInterval(loading);
	$('.loading').hide();
	$('.repeat, .ready').fadeIn();
};

function resetApp() {
	$('.repeat, .ready, .play').fadeOut();
	
	setTimeout(function() {
		$('.loading').show();
	}, 400);

	$('.moods').fadeIn();

};

function initEvents() {
	$('button').on('click', function(e) {
		e.preventDefault();
	});

	$('#submit-btn').on('click', function(e){
		e.preventDefault();
		setTimeout(function() {
			$('.subject').fadeOut();
			$('.play').fadeIn();
			loadingAnimation();
		}, 200);
	});

	$('.ready').on('click', function() {
		$(this).toggleClass('stop-btn').find('i').toggleClass('fa-play-circle').toggleClass('fa-stop');
	});

	$('.repeat').on('click', function() {
		resetApp();
	});
}