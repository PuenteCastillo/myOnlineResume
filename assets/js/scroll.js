
$('.sSpeed').each(function () {
    var speed = 0;
    var element = $(this);
    console.log("hello world");
    
    $(document).on("scroll", function () {
        
        var wScroll = $(window).scrollTop();
       element.css({'margin-top': -wScroll*.05});
        console.log(wScroll);
      
    
    });

});