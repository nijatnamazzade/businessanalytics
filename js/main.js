/* Smooth SCrolling */

$(document).ready(function(){
  
  $("a").on('click', function(event) {

    
    if (this.hash !== "") {
     
      event.preventDefault();

     
      var hash = this.hash;

     
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){
   
       
        window.location.hash = hash;
      });
    } 
  });
});


/* Loading Animation */


 setTimeout(function(){


  $('.loader_bg').fadeToggle();
 }, 1300);