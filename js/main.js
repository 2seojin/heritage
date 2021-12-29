$(document).ready(function(){
    //센터현황 (tab menu)
    //첫번째 이미지만 보임
    $('.zone_list div').hide();
    $('.zone_list .zone1').show();
    $('.zone_btn ul li').mouseover(function(){
        //마우스 오버시 li의 인덱스번호를 idx변수에 저장
        var idx=$(this).index();
        //인덱스번호에 해당하지 않는 li는 active 제거
        $('.zone_btn ul li').removeClass('active');
        //마우스 오버된 li만 active설정
        $(this).addClass('active');
        //인덱스번호에 해당하지 않는 배경이미지는 안 보임
        $('.zone_list div').stop().fadeOut();
        //인덱스번호에 해당하는 배경이미지만 보임
        $('.zone_list div').eq(idx).stop().fadeIn();
    })
});