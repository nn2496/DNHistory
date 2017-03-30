$(function(){

    /**
     * function
     */

    // type 1
    function accDisplayInit(){

        $('.acc-2depth-display').each(function(index){

            $(this).data({'open': 'false'})

        });
    }

    function toggleDisplaySub( $depth1Link ){

        var $depth1LinkSub = $depth1Link.next('.acc-2depth-display');
        var $depth1LinkSubSibling = $depth1LinkSub.parent().siblings().children('.acc-2depth-display');

        if( $depth1LinkSub.data('open') == 'false' ){

            $depth1LinkSubSibling
                .stop()
                .removeClass('on')
                .data('open', 'false')
                .prev('.acc-1depth-display')
                .addClass('fold');

            $depth1LinkSub
                .stop()
                .addClass('on')
                .data('open', 'true')
                .prev('.acc-1depth-display')
                .removeClass('fold');

        } else {

            $depth1LinkSub
                .stop()
                .removeClass('on')
                .data('open', 'false')
                .prev('.acc-1depth-display')
                .addClass('fold');

        }

    }


    // type 2
    function accInit(){

        $('.animate-2depth').each(function(index){

            $(this)
                .data({

                'open': 'false',

                'height': $(this).height()

                })
                .css({height : 0})
                .prev('.animate-1depth-link')
                .addClass('fold');

        });
    }

    function toggleSub( $depth1Link ){

        var $depth1LinkSub = $depth1Link.next('.animate-2depth');
        var $depth1LinkSubSibling = $depth1LinkSub.parent().siblings().children('.animate-2depth');

        if( $depth1LinkSub.data('open') == 'false' ){

            $depth1LinkSubSibling
                .stop()
                .animate({height:0})
                .data('open', 'false')
                .prev('.animate-1depth-link')
                .addClass('fold');

            $depth1LinkSub
                .stop()
                .animate({height: $depth1LinkSub.data('height')})
                .data('open', 'true')
                .prev('.animate-1depth-link')
                .removeClass('fold');

        } else {

            $depth1LinkSub
                .stop()
                .animate({height: 0})
                .data('open', 'false')
                .prev('.animate-1depth-link')
                .addClass('fold');

        }

    }

    // type 3
    function accTransitionInit(){

        $('.acc-2depth-transition').each(function(index){

            $(this)
                .data({

                    'open': 'false',

                    'height': $(this).height()

                })
                .css({height : 0})
                .prev('.animate-1depth-link')
                .addClass('fold');

        });
    }

    function toggleTransitionSub( $depth1Link ){

        var $depth1LinkSub = $depth1Link.next('.acc-2depth-transition');
        var $depth1LinkSubSibling = $depth1LinkSub.parent().siblings().children('.acc-2depth-transition');

        if( $depth1LinkSub.data('open') == 'false' ){

            $depth1LinkSubSibling
                .stop()
                .css({height:0})
                .data('open', 'false')
                .prev('.transition-1depth-link')
                .addClass('fold');

            $depth1LinkSub
                .stop()
                .css({height: $depth1LinkSub.data('height')})
                .data('open', 'true')
                .prev('.transition-1depth-link')
                .removeClass('fold');

        } else {

            $depth1LinkSub
                .stop()
                .css({height: 0})
                .data('open', 'false')
                .prev('.transition-1depth-link')
                .addClass('fold');

        }

    }



    /**
     * event
     */

    // type 1
    accDisplayInit();

    $('.acc-1depth-display').on('click', function(e){

        e.preventDefault();

        toggleDisplaySub( $(this) );

    });


    // type 2
    accInit();

    $('.animate-1depth-link').on('click', function(e){

        e.preventDefault();

        toggleSub( $(this) );

    });

    // type 3
    accTransitionInit();

    $('.transition-1depth-link').on('click', function(e){

        e.preventDefault();

        toggleTransitionSub( $(this) );

    });

});




// ���ڵ�� �޴� Ÿ�� 2

$(function(){

    function menuAnimateInit(){
        $('.animate-1depth-link').data({'open' : 'false'});

        $('.animate-2depth').each(function(index){

            $(this).data({
                'height' : $(this).height()
            }).css({
                height : 0
            });

        });
    }

    function menuAnimateOn( $depth1 ){
        $depth1.parent('.acc-1depth-item').siblings().children('.animate-2depth').stop().animate({
            height : 0
        });
        $depth1.parent('.acc-1depth-item').siblings().children('.animate-1depth-link').data({'open' : 'false'});
        $depth1.next('.animate-2depth').stop().animate({
            height : $depth1.next('.animate-2depth').data('height')
        });
    }

    function menuAnimateOff( $depth1 ){
        $depth1.next('.animate-2depth').stop().animate({
            height : 0
        });
    }

    function menuArrowAnimateOn( $depth1 ){
        $depth1.parent('.acc-1depth-item').siblings().children('.animate-1depth-link').removeClass('on').data({'open' : 'false'});
        $depth1.addClass('on');
    }

    function menuArrowAnimateOff( $depth1 ){
        $depth1.removeClass('on');
    }

    // �ʱ�ȭ �Լ� ����
    menuAnimateInit();

    // 1���� �޴� Ŭ���� ���� ����
    $('.animate-1depth-link').on('click', function(){

        if( $(this).data('open') == 'false' ){
            // ����
            menuArrowAnimateOn( $(this) );
            menuAnimateOn( $(this) );

            $(this).data({'open' : 'true'});

        } else {
            // �ݱ�
            menuArrowAnimateOff( $(this) );
            menuAnimateOff( $(this) );

            $(this).data({'open' : 'false'});
        }


    });

});
/**
 *
 * 1. 이벤트( 이벤트 대상 )
 *
 *    - 페이지 : 로딩 / 버튼 : 클릭
 *
 * 2. 기능 - 함수
 *
 *    - 이미지 오른쪽->왼쪽으로 슬라이딩( 다음것 보여줌 )
 *
 *    - 이미지 왼쪽->오른쪽으로 슬라이딩( 이전것 보여줌 )
 *
 *    - 이미지 배치, 인덱스 번호 초기화
 *
 */

$(function(){

    var currentIndex = 0; // 화면 안에서 바깥으로 나가는 이미지 인덱스 변수
    var index = 0; // 화면 바깥에서 안으로 들어오는 이미지 인덱스 변수
    var visualLength = 0; // 이미지의 개수 저장 변수
    var $visual = $('.js-ani');


    // 초기화 함수 정의
    function rollingInit(){

        currentIndex = 0;
        visualLength = $visual.length;

        $visual.css({
            left : 900
        }).eq(0).css({
            left : 0
        });

    }

    // 이미지 이동( 오른쪽 -> 왼쪽 )
    function moveLeft(){
        if( index >= visualLength ){ index = 0; }

        $visual.eq(currentIndex).stop().animate({left : -900}, 1000);
        $visual.eq(index).css({left : 900}).stop().animate({left : 0}, 1000);

        currentIndex = index;
        index++;

    }

    // 이미지 이동( 왼쪽 -> 오른쪽 )
    function moveRight(){
        if( index <= -1 ){ index = visualLength-1; }

        $visual.eq(currentIndex).stop().animate({left : 900}, 1000);
        $visual.eq(index).css({left : -900}).stop().animate({left : 0}, 1000);

        currentIndex = index;
        index--;
    }

    // load : 이미지가 로딩 완료된후 발생되는 이벤트
    // HTML DOM Element : 문자 데이터
    $(document).on('load', function(){
    });

    // 초기화 함수 실행
    rollingInit();

    $('.arrow-btn.next').on('click', function(){
        index = currentIndex + 1;

        if( !$('.js-ani').is(':animated') ){
            moveLeft();
        }

    });

    $('.arrow-btn.prev').on('click', function(){
        index = currentIndex - 1;

        if( !$('.js-ani').is(':animated') ){
            moveRight();
        }

    });


});
/**
 *
 * 1. 이벤트( 이벤트 대상 )
 *
 *    - 페이지 : 로딩 / 버튼 : 클릭
 *
 * 2. 기능 - 함수
 *
 *    - 이미지 페이드 인-아웃( 이전것, 다음것 보여줌 )
 *
 *    - 이미지 배치, 인덱스 번호 초기화
 *
 */

/**
 *
 * 3. 기능 추가
 *
 *    - 페이지 표시 : pagination
 *
 *    - 재생/일시정지
 *
 */

$(function(){

    var currentIndex = 0; // 보이는 상태에서 사라지는 이미지 인덱스 변수
    var index = 0; // 안보인는 상태에서 나타나는 이미지 인덱스 변수
    var visualLength = 0; // 이미지의 개수 저장 변수
    var $visual = $('.js-fade');

    // 초기화 함수 정의
    function fadeInit(){

        currentIndex = 0;
        visualLength = $visual.length;

        $visual.hide().eq(0).show();

        // 페이지 표시 함수 실행
        pagination();

    }

    // 다음 이미지 함수
    function fadeNext(){
        if( index >= visualLength ){ index = 0; }

        $visual.eq(currentIndex).stop().fadeOut();
        $visual.eq(index).stop().fadeIn();

        currentIndex = index;
        index++;
1
        currentPage();
    }

    // 이전 이미지 함수
    function fadePrev(){
        if( index <= -1 ){ index = visualLength-1; }

        $visual.eq(currentIndex).stop().fadeOut();
        $visual.eq(index).fadeIn();

        currentIndex = index;
        index--;

        currentPage();
    }

    // 페이지 표시 함수
    function pagination(){

        for(var i=0; i<visualLength; i++){

            var pageItem = '';
            pageItem += '<li class="pagination-item">';
            pageItem += '<button type="button" class="pagination-button">';
            pageItem += (i+1);
            pageItem += '</button>';
            pageItem += '</li>';

            $('.pagination').append(pageItem);
        }

        $('.control').css({'margin-left' : -$('.control').width() / 2});

        // 현재 페이지 표시 함수 실행
        currentPage();

    }

    // 현재 페이지 표시 함수
    function currentPage(){
        $('.pagination-item').children('.pagination-button').removeClass('on');
        $('.pagination-item').eq(currentIndex).children('.pagination-button').addClass('on');
    }

    // 초기화 함수 실행
    fadeInit();

    $('.js-fade-btn.next').on('click', function(){
        index = currentIndex + 1;

        if( !$('.visual').is(':animated') ){
            fadeNext();
        }

    });

    $('.js-fade-btn.prev').on('click', function(){
        index = currentIndex - 1;

        if( !$('.visual').is(':animated') ){
            fadePrev();
        }

    });

    $('.pagination-button').on('click', function(){
        index = $(this).index('.pagination-button');

        if( !$('.visual').is(':animated') ){
            fadePrev();
        }

    });


});
$(function(){

    function tabSelect( $allTab, $thisTab, $tabContent ){

        var tabNumber = $allTab.index( $thisTab );

        $allTab.removeClass('on').eq(tabNumber).addClass('on');

        $tabContent.removeClass('on').eq(tabNumber).addClass('on');

    }

    // type 1
    $('.tab-menu-list').on('click', function(){

        tabSelect( $('.tab-menu-list'), $(this), $('.tab-content') );

    });


    // type 2
    $('.tab-heading').on('click', function(){

        tabSelect( $('.tab-heading'), $(this), $('.tab-paragraph') );

    });

});




/**
 *
 * 1. �̺�Ʈ
 *
 * 2. ��� - �Լ�
 *
 */

$(function(){

    // on Ŭ���� �߰� - tab, tab-content
    function tabOn( $tab, index ){

        $tab.siblings().removeClass('on');
        $tab.addClass('on');

        var $tabContent = $('.tab-content').eq(index);

        $tabContent.siblings().removeClass('on');
        $tabContent.addClass('on');

    }

    $('.tab-menu-list').on('click', function(){

        var index = $(this).index('.tab-menu-list');

        tabOn( $(this), index );

    });

});

/**
 *
 * 1. �̺�Ʈ
 *
 * 2. ��� - �Լ�
 *
 */

$(function(){

    // on Ŭ���� �߰� - tab, tab-content
    function tabOn( $tab, index ){

        $tab.siblings('.tab-heading').removeClass('on');
        $tab.addClass('on');

        var $tabContent = $('.tab-paragraph').eq(index);

        $tabContent.siblings('.tab-paragraph').removeClass('on');
        $tabContent.addClass('on');

    }

    $('.tab-heading').on('click', function(){

        var index = $(this).index('.tab-heading');

        tabOn( $(this), index );

    });

});

/**
 *
 * javascript coding �ܰ�
 *
 * 1. 2���� ī�װ� ����
 *
 *  1) �̺�Ʈ
 *
 *  2) ��� - �Լ�
 *
 */

$(function(){

    /**
     * �ʿ��� ��� - �ʱ�ȭ ���, ����޴��� �����ִ� ���, ����޴��� ����� ���, ȭ��ǥ�� ���������� �����ϴ� ���, ȭ��ǥ�� �Ʒ��� �����ϴ� ���
     *
     */

    // �ʱ�ȭ �Լ�
    function menuTransInit(){
        $('.transition-1depth-link').data({'open' : 'false'});

        $('.acc-2depth-transition').each(function(index){

            $(this)
                .data({'height' : $(this).height()})
                .css({height:0});
        });
    }

    // ����޴� �����ִ� �Լ�
    function menuTransOn( $depth1 ){
        // $(this) => depth1

        var $currentSiblingsChildrenSub = $depth1.parent().siblings().children('.acc-2depth-transition');
        var $currentNextSub = $depth1.next('.acc-2depth-transition');

        $currentSiblingsChildrenSub.css({height : 0});
        $currentNextSub.css({height : $currentNextSub.data('height')});
    }

    // ����޴� ����� �Լ�
    function menuTransOff( $depth1 ){

        var $currentNextSub = $depth1.next('.acc-2depth-transition');

        $currentNextSub.css({height : 0});
    }

    // ȭ��ǥ �Ʒ��� �����ϴ� �Լ�
    function arrowTransOn( $depth1 ){

        var $currentSiblingsChildrenAnchor = $depth1.parent().siblings().children('.transition-1depth-link');

        $currentSiblingsChildrenAnchor.removeClass('on');
        $depth1.addClass('on');
    }

    // ȭ��ǥ ������ �����ϴ� �Լ�
    function arrowTransOff( $depth1 ){
        $depth1.removeClass('on');
    }

    // �ʱ�ȭ �Լ� ����
    menuTransInit();

    $('.transition-1depth-link').on('click', function(e){
        // Ŭ������ �� ����

        e.preventDefault();

        if( $(this).data('open') == 'false' ){

            menuTransOn( $(this) );
            arrowTransOn( $(this) );

            $(this).data({'open' : 'true'});

        } else {

            menuTransOff( $(this) );
            arrowTransOff( $(this) );

            $(this).data({'open' : 'false'});

        }


    });

});
