$(document).ready(function(){
   $('ul.gnb>li , .nav_bg').hover(function(){
       $('ul.sub,.nav_bg').stop().slideDown();
   },function(){
       $('ul.sub,.nav_bg').stop().slideUp();
   }); 
});