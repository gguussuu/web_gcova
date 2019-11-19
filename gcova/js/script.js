$(document).ready(function(){
    
    $(".quick .top").click(function(){
       $("html,body").animate({
           "scrollTop":0
       },1000); 
    });
    
    $("ul.slide").bxSlider({
        auto: true,
        nextSelector: '.next', //다음 버튼 지정
        prevSelector: '.prev', //이전 버튼 지정
        nextText: '>', //다음 버튼 요소에 ‘next’ 텍스트 삽입 , 텍스트가 필요 없다면 text-indent로 텍스트 숨김
        prevText: '<', //이전 버튼 요소에 ‘prev’ 텍스트 삽입
        pagerCustom: '.pager', //페이저만들어쓰기
    });
    
        $(" ul.chicken").bxSlider({
        auto: false,
        nextSelector: '.right', //다음 버튼 지정
        prevSelector: '.left', //이전 버튼 지정
        nextText: '<i class="fa fa-angle-right" aria-hidden="true"></i>', //다음 버튼 요소에 ‘next’ 텍스트 삽입 , 텍스트가 필요 없다면 text-indent로 텍스트 숨김
        prevText: '<i class="fa fa-angle-left" aria-hidden="true"></i>', //이전 버튼 요소에 ‘prev’ 텍스트 삽입
            pager : false,
    });
    
    
    var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
var options = { //지도를 생성할 때 필요한 기본 옵션
	center: new kakao.maps.LatLng(37.625046, 127.0799667), //지도의 중심좌표.
	level: 3 //지도의 레벨(확대, 축소 정도)
};

var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
});