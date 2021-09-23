/**
 * --------------------------------------------------------------------------
 *  common.js
 * --------------------------------------------------------------------------
 */

var front = front || {};


front.common = front.common || {};

front.common = (function () {

  var init = function() {
    this.a();
    this.commonHandler();
    this.scrollHeader();

  };

  var a = function () {
    $('a[href="#"]').on('click', function (e) {
      e.preventDefault();
    });
  }
  var scrollHeader = function () {
    var scrollableElement = document.body; //document.getElementById('scrollableElement');
    scrollableElement.addEventListener('wheel', checkScrollDirection);
    console.log(scrollableElement);
  }

  function checkScrollDirection(event) {
    // console.log('scrollableElement');
    // console.log(event.deltaY < 0);
    // console.log(window.pageYOffset);
    if (event.deltaY < 0) {
      // console.log('UP');
      if (window.pageYOffset > 124){
        $('.header').show()
            .css({'position': 'fixed','top':'0'})
            .addClass('header-sm')
      } else {
        $('.header').show()
            .css({'position': 'relative'})
            .removeClass('header-sm');
        $('.header-main').show()
            .css({'position': 'absolute'})
      }
    } else {
      // console.log('Down');
      // console.log(window.scrollY);
      if (window.pageYOffset > 124){
        $('.header').hide()
      }
    }
  }

  var commonHandler = function () {
    // $(".header").sticky({topSpacing:0});

      $('._btnTooltip').on('click',function (){
        $(this).siblings().show();
      })

      $('._btnTooltipClose').on('click',function (){
        $(this).parent().hide();
      })

      $('._fileUpload .form-control-file').on('change', function(){
      var target = $(this).parent().find('.file-box');
      if(typeof(this.files) !='undefined'){
        if(this.files.length == 0){
          target.removeClass('withFile').text(target.data('default'));
        }
        else {
          var file = this.files[0];
          var name = file.name;
          target.parent().addClass('withFile');
          target.html('<span>'+ name +'</span><a href="#" class="btn-delete"><em class="sr-only">file delete</em></a>');
        }
      }
      return false;
    });

    if(!$('.full-bg.macrogen.no-bg').length) {
      if($('.full-bg.macrogen').length) {
        if($('html, body').scrollTop() === 0) {
          // 서브 배경 애니메이션
          var sub = setTimeout(function() {
            console.log($('html, body').scrollTop())
            if($('html, body').scrollTop() !== 0) clearTimeout(sub)
            else $('html, body').animate({scrollTop: 980}, 200);
          }, 3000);
        }
      }
      // 스크롤 애니메이션
      AOS.init();
    }
  }



  return {
    a : a,
    commonHandler : commonHandler,
    scrollHeader : scrollHeader,
    init : init,
  }
})();

$(function () {
  front.common.init();
});
