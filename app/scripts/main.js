;
(function($) {
    $(document).ready(function() {
        var sideNavItemHeight = $('.side-nav-wrap li').height();
        $('.side-nav-wrap li').css('line-height', sideNavItemHeight + 'px');

        $('#btn-side-nav').on('click', function(e) {
            e.preventDefault();
            $('.side-nav-wrap').toggleClass('active');
        });

        $('input').iCheck({
            checkboxClass: 'iradio_square-grey',
            radioClass: 'iradio_square-grey',
            increaseArea: '20%' // optional
        });

        $('.grid-item a').on('click', function(e){
        	var _this = $(this);
        	e.preventDefault();
        	$(this).parent().addClass('flip');
        	window.setTimeout(function(){
        		window.location.href = $(_this).attr('href');
        	}, 1000);
        });
    });
})(jQuery);
