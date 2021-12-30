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
    //.zone_btn의 번틀 클릭시 맨 위로 올라가는 것 방지함
    $('.zone_btn ul li a').click(function(e){
        e.preventDefault();
    });

    //sitemap
    //메뉴 버튼을 클릭하면 사이트맵 나옴
    $('.menu').click(function(){
        $('.sitemap').show();
    });
    //닫기 버튼을 클릭하면 사이트맵 사라짐
    $('.close').click(function(){
        $('.sitemap').hide();
    });

    //s3 slick slider
    $('.slider').slick({
        arrows:false,                    /*좌, 우 화살표 숨김*/
        slidesToShow:3,                 /*한번에 3개씩 보임*/ 
        slidesToScroll:1,               /*1개씩 이동시킴*/
        // padding: '40px',
        responsive:[{                   /*반응형*/
            breakpoint: 481,            /*중단점 설정:481*/
            settings:
                {
                slidesToShow:1,         /*한번에 1개씩 보임*/
                slidesToScroll:1,       /*1개씩 이동시킴*/
                infinite:true,           /*무한반복*/
                centerPadding: '5px'
            }            
        }]
    });

    //moblie ver. sitemap

    //resize(): 브라우저의 크기가 변하는 것을 감지하는 이벤트
    //load(): 브라우저가 실행되면 발생하는 이벤트
    //on(): 객체에 이벤트를 2개 이상 설정할 때 사용함
    $(window).on('load resize', function(){
        //접속한 장치의 가로길이를 인식해서 device변수에 저장
        var device=$(window).width();
        //만약 접속한 장치의 가로길이가 480이하라면 아코디언메뉴 실행
        if(device <= 480) {
            $('.sitemap .site_menu > ul > li').click(function(){
                //만약 클릭한 메뉴에 active가 없다면
                if($(this).attr('class') != 'active'){
                    //모든 서브메뉴는 들어감
                    $('.site_menu .sub').stop().slideUp();
                    //클릭한 메뉴의 서브메뉴만 나옴
                    $(this).find('.sub').stop().slideDown();
                    //모든 메뉴에서 active 제거
                    $('.site_menu ul li').removeClass('active');
                    //클릭한 메뉴에 active 클래스 설정
                    $(this).addClass('active');
                //클릭한 메뉴에 active가 있다면
                }else{
                    //클릭한 메뉴의 서브메뉴 들어감
                    $(this).find('.sub').stop().slideUp();
                    //클릭한 메뉴에서 active 제거
                    $(this).removeClass('active');
                }
            });
        }
    });
});