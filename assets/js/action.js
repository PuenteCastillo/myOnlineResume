




$.fn.extend({
  animateCss: function (animationName, callback) {

    var animationEnd = (function (el) {
      var animations = {
        animation: 'animationend',
        OAnimation: 'oAnimationEnd',
        MozAnimation: 'mozAnimationEnd',
        WebkitAnimation: 'webkitAnimationEnd',
      };

      for (var t in animations) {
        if (el.style[t] !== undefined) {
          return animations[t];
        }
      }
    })(document.createElement('div'));

    this.addClass('animated ' + animationName).one(animationEnd, function () {
      $(this).removeClass('animated ' + animationName);

      if (typeof callback === 'function') callback();
    });

    return this;
  },
});


$('.action').each(function () {

  var actionDiv = $(this);
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();
  var triggered = false;
  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();
  var classesArr = actionDiv.attr('class').split(" ");
  var myAnimation;

  actionDiv.css('opacity', '0');
 

  $(document).on("scroll", function () {
    viewportTop = $(window).scrollTop();
    viewportBottom = viewportTop + $(window).height();

    // console.log('elementTop : ' + elementTop);
    // console.log('elementBottom : ' + elementBottom);
    // console.log('viewportTop : ' + viewportTop);
    // console.log('viewportBottom : ' + viewportBottom);
  
  
      for (i = 0; i < classesArr.length; i++) {
        if (classesArr[i] == "action") {
          myAnimation = classesArr[i + 1];
          actionDiv.removeClass(classesArr[i + 1]);
    
        }
      }

    if (elementTop <= viewportBottom && !triggered) {
      triggered = true;

     
      actionDiv.css('opacity', '1');
      actionDiv.removeClass("action");
      actionDiv.animateCss(myAnimation);
      classesArr = actionDiv.attr('class').split(" ");
      
    }
  });
});





