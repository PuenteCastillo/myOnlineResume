var myVideo = $('.thisIsAVideo');

$('.thisIsAVideo').on('mouseenter', function(){
    myVideo.get(0).play;
} )

var didItToggle = false;
$(window).scroll(function () {
    parallax();
})
function parallax() {
    var wScroll = $(window).scrollTop();
    if(wScroll <= 500 ){
     
        $("#navHome").addClass("highlight");
        $("#navAbout").removeClass("highlight");
        $("#navServices").removeClass("highlight");
        $("#navCoding").removeClass("highlight");
        $("#navContact").removeClass("highlight");
        $("#navPhotography").removeClass("highlight");
    }
    if(wScroll <= 1500 && wScroll >=500){
        $("#navAbout").addClass("highlight");
        $("#navHome").removeClass("highlight");
        $("#navServices").removeClass("highlight");
       
        $("#navContact").removeClass("highlight");
        $("#navPhotography").removeClass("highlight");
        $("#navCoding").removeClass("highlight");
       
    }
    if(wScroll <= 2500 && wScroll >= 1501){
        $("#navServices").addClass("highlight");
        $("#navAbout").removeClass("highlight");
        $("#navHome").removeClass("highlight");
  
        $("#navContact").removeClass("highlight");
        $("#navPhotography").removeClass("highlight");
        $("#navCoding").removeClass("highlight");
      
    }
    if(wScroll <= 3500  && wScroll >= 2501){
        $("#navCoding").addClass("highlight");
        $("#navAbout").removeClass("highlight");
        $("#navServices").removeClass("highlight");
        $("#navHome").removeClass("highlight");
        $("#navContact").removeClass("highlight");
        $("#navPhotography").removeClass("highlight");
 
        
    }
    if(wScroll <= 4000  && wScroll >= 3500){
        $("#navPhotography").addClass("highlight");
        $("#navAbout").removeClass("highlight");
        $("#navServices").removeClass("highlight");
       
        $("#navHome").removeClass("highlight");
        $("#navContact").removeClass("highlight");
        $("#navCoding").removeClass("highlight");
        
    }
    if(wScroll > 4000 ){
        $("#navContact").addClass("highlight");
        $("#navPhotography").removeClass("highlight");
        $("#navAbout").removeClass("highlight");
        $("#navServices").removeClass("highlight");
       
        $("#navHome").removeClass("highlight");
     
        $("#navCoding").removeClass("highlight");
        
    }
console.log(wScroll);
}

$("#menu-toggle").click(function (e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
    if (didItToggle == false) {
        document.getElementById('thisImg').src = './assets/images/2000px-VisualEditor_-_Icon_-_Menu.svg.png';
        didItToggle = true;

    } else {
        document.getElementById('thisImg').src = ' ./assets/images/Arrow.jpg'
        didItToggle = false;
    }
});
function myFunction(x) {
    if (x.matches) { // If media query matches
        $("#wrapper").addClass("toggled");
        document.getElementById('thisImg').src = ' ./assets/images/Arrow.jpg';


    } else {
        $("#wrapper").removeClass("toggled");
        document.getElementById('thisImg').src = './assets/images/2000px-VisualEditor_-_Icon_-_Menu.svg.png';
    }
}

var x = window.matchMedia("(min-width: 768px)");
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes