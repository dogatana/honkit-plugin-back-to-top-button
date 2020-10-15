let button_html;

// create button html at start
window.gitbook.events.bind('start', function(e, config) {
    const plugin = 'back-to-top-button';
    let icon = '<i class="fa fa-arrow-up"></i>';
    if (config[plugin] && config[plugin]['icon']) {
        icon = config[plugin]['icon'];
    }
    button_html = '<div class="back-to-top">' + icon + '</i></div>';
});

window.gitbook.events.on('page.change', function() {
    $(".book").append(button_html);
    $(".back-to-top").hide();

	$('.book-body,.body-inner').on('scroll', function () {
		if ($(this).scrollTop() > 100) {
			$('.back-to-top').fadeIn();
		} else {
			$('.back-to-top').fadeOut();
		}
	});

	$('.back-to-top').click(function () {
		$('.book-body,.body-inner').animate({
			scrollTop: 0
		}, 800);
		return false;
	});
});
