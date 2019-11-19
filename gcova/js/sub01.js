$(document).ready(function(){
    $(".menu .tit_menu ul.tit li").click(function(){
        var i = $(this).index();
        console.log(i);
        $(this).siblings().removeClass("on");
        $(this).addClass("on");
        $(".menu .contents  ul").eq(i).siblings().removeClass("on");
        $(".menu .contents  ul").eq(i).addClass("on");
    });
});