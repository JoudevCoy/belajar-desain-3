
$(document).ready(function(){
  
  var toggleCaret = 0;
  $(".navbar-caret").bind("click", function(){
    if (toggleCaret != 1){
      toggleCaret = 1;
      $(".dropdown ul").css("display", "block");
      $(".navbar-caret").css("transform", "rotate(180deg)");
    } else if(toggleCaret === 1){
      toggleCaret = 0;
      $(".dropdown ul").css("display", "none");
      $(".navbar-caret").css("transform", "rotate(0deg)");
    }
  });
  
  $(".btn-nav").bind("click", function(){
    $(".navbar").toggleClass("navbar-open");
  });
  
  //bagian animasi
  
  function animText(){
    setTimeout(() => {
      $(".jumbotron-title div").css({"transform": "translateY(-120%)", "transition": "transform 0.7s ease-in-out"});
      setTimeout(() => {
        $(".jumbotron-title div").css({"transform": "translateY(-240%)", "transition": "transform 0.7s ease-in-out"});
        setTimeout(() => {
          $(".jumbotron-title div").css({"transform": "translateY(-360%)", "transition": "transform 0.7s ease-in-out"});
          setTimeout(() => {
            $(".jumbotron-title div").css({"transform": "translateY(0%)", "transition": "transform 1s ease-in-out"});
            animText();
          }, 3000);
        }, 3000);
      }, 3000);
    }, 3000);
  }
  animText();
  
  
});