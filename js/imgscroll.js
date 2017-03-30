/**
 * Created by KimDoHee on 2017-03-03.
 */

$(function(){

    var currentIndex = 0; // ���̴� ���¿��� ������� �̹��� �ε��� ����
    var index = 0; // �Ⱥ��δ� ���¿��� ��Ÿ���� �̹��� �ε��� ����
    var visualLength = 0; // �̹����� ���� ���� ����
    var $visual = $('.js-fade');


    // �ʱ�ȭ �Լ� ����
    function fadeInit(){

        currentIndex = 0;
        visualLength = $visual.length;

        $visual.hide().eq(0).show();

        // ������ ǥ�� �Լ� ����
        pagination();

    }


    // ���� �̹��� �Լ�
    function fadeNext(){
        if( index >= visualLength ){ index = 0; }

        $visual.eq(currentIndex).stop().fadeOut();
        $visual.eq(index).stop().fadeIn();

        currentIndex = index;
        index++;
        1
        currentPage();
    }

    // ���� �̹��� �Լ�
    function fadePrev(){
        if( index <= -1 ){ index = visualLength-1; }

        $visual.eq(currentIndex).stop().fadeOut();
        $visual.eq(index).fadeIn();

        currentIndex = index;
        index--;

        currentPage();
    }

    // ������ ǥ�� �Լ�
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

        // ���� ������ ǥ�� �Լ� ����
        currentPage();

    }

    // ���� ������ ǥ�� �Լ�
    function currentPage(){
        $('.pagination-item').children('.pagination-button').removeClass('on');
        $('.pagination-item').eq(currentIndex).children('.pagination-button').addClass('on');
    }

    // �ʱ�ȭ �Լ� ����
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