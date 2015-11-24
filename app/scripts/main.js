;
(function($) {
    $(document).ready(function() {
        var sideNavItemHeight = $('.side-nav-wrap li').height();
        $('.side-nav-wrap li').css('line-height', sideNavItemHeight + 'px');

        $('#btn-side-nav').on('click', function(e) {
            e.preventDefault();
            $('.side-nav-wrap').toggleClass('active');
        });

        $(document).on('click', '.side-nav-wrap.active', function(e){
            $('.side-nav-wrap').toggleClass('active');
        });

        $('.side-nav a').on('click', function(e){
            e.stopPropagation();
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


        //我的收藏页面，点击编辑按钮
        $('.title-bar .edit').on('click', function(e){
            e.preventDefault();
            $('.actions').toggleClass('hidden show');
            $('.thumbnail.selectable a').on('click.preventDefault', function(e2){
                e2.preventDefault();
            });
            $('.thumbnail.selectable').on('click.select', function(e){
                e.preventDefault();
                console.log(1);
                $(this).toggleClass('selected');
            });
        });

        $('.select-all').on('click', function(e){
            e.preventDefault();
            $('.selectable').addClass('selected');
        });

        $('.actions .cancle').on('click', function(e){
            e.preventDefault();
            $('.selectable').removeClass('selected');
            $(this).closest('.actions').addClass('hidden').removeClass('show');
            $('.thumbnail.selectable a').off('click.preventDefault');
            $('.thumbnail.selectable').off('click.select');
        });

        
    });
})(jQuery);
