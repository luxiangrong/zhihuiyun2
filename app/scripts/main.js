;
(function($){
	$(document).ready(function(){
		var sideNavItemHeight = $('.side-nav-wrap li').height();
		$('.side-nav-wrap li').css('line-height', sideNavItemHeight + 'px');

		$('#btn-side-nav').on('click', function(e){
			e.preventDefault();
			$('.side-nav-wrap').toggleClass('active');
		});
	});
})(jQuery);