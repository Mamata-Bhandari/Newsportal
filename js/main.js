$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop()>60)
        {
            $(".navbar").addClass('scroll')
        }
        else
        {
            $(".navbar").removeClass('scroll')
        }
    })
})