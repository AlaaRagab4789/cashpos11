
$(document).ready(function(){
    var testH = $(window).height();
    var navH = $('.navbar').innerHeight();
    
 $('.section1,.section2,.section4,.section3').height(testH-navH);
 $("#electronic1").height(navH)

$(".icon2").click(function(){


$(".aside").animate({width: "0px"},200);
$(".fa-align-right").css("display","none");
$(".fa-times").css("display","block");
$(".section2,.navbar").animate({width: "100%"},200)

});


$(document).ready(function(){
    var wd1 = $(window).width();
    var wd2 = $(".aside").width();
    var add = $(".add").width();

    if(wd1 >= 768){
    
    
    $(".aside").css({position: 'fixed',top: '0',right: '0',bottom: '0'});
    $(".section2,.navbar").width(wd1-wd2);
    $(".add1").css({marginRight: $(".inpt").width() + 120});
    $(".head123").width($(".inpt").width())
    $(".add").css({position: 'fixed'})

    $(".section2,.navbar,.section4").css({marginRight: $(".aside").width()})
    
    }
    
    
    })


var navH = $('.navbar').innerHeight();
$('.electronic').height(navH)

})

$(".fa-times").click(function(){


$(".aside").animate({width: "100%"},200);
$(".fa-align-right").css("display","block");

});



