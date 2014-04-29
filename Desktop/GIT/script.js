(function($){
  $(document).ready(function(){
    
	
	$("#clickme").click(function(){
		if (!$("#footer").hasClass("hidden")) {
			$("#footer").hide("slow"); 
			$("#footer").addClass("hidden");
		}
		else {
			$("#footer").show("slow");
			$("#footer").removeClass("hidden");
		}
	});
$("#block-system-main").mouseenter(function() {
    $( this ).css({
      "font-size": 25,
      "font-weight": "bolder"
    });
  });
  $("#block-system-main").mouseleave(function() {
    $( this ).css({
      "font-size": 16,
      "font-weight": "normal"
    });
  });

   $("#clickone").click(function(){
       $("#block-views-portfel-block .views-row-last").css({
           "display": "none"
       });
   });
      
  
	
  });    
})(jQuery); 