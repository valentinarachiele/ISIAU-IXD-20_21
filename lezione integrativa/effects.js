//Questo file raccoglie gli effetti e le animazioni del mio sito ISIA Urbino
$(document).ready(function(){
    $(".read-more-less").click(function(){
      $("#nascosto").show();
      $(this).hide();
      $(".up").show();
    });
    $(".up").click(function(){
      $(this).hide();
      $("#nascosto").hide();
      $(".read-more-less").show();
    });
});