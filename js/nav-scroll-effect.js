$(document).ready(function(){
    $('.navbar-nav>li>a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });

    $('#section-1').click(function()
    {
        var x=$('.section-1').offset().top;
        $('body,html').animate({scrollTop:x-56},500);
    }); 
 
    $('#section-2').click(function()
    {
        var x=$('.section-2').offset().top;
        $('body,html').animate({scrollTop:x-60},500);
    }); 

    $('#section-3').click(function()
    {
        var x=$('.section-3').offset().top;
        $('body,html').animate({scrollTop:x-5},500);
    }); 
             
    $('#section-4').click(function()
    {
        var x=$('.section-4').offset().top;
        $('body,html').animate({scrollTop:x-60},500);
    });

    $('#section-5').click(function()
    {
        var x=$('.section-5').offset().top;
        $('body,html').animate({scrollTop:x-60},500);
    });
}); 