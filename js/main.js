$(document).ready(function(){
    $('#materiel').on('click',function() {
        var element = $(this).attr('href');
        $('html').animate( {scrollTop: $(element).offset().top },800);
        return false;
    });
});