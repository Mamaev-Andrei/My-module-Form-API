(function($) {
    $(document).ready(function() {
        $("#clickme").click(function() {
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
            $(this).css({
                "font-size": 25,
                "font-weight": "bolder"
            });
        });
        $("#block-system-main").mouseleave(function() {
            $(this).css({
                "font-size": 16,
                "font-weight": "normal"
            });
        });
function classNumber(a) {
  return a + 1;
}
          var click_number = 0;
        $("#clickone").click(function() {
          click_number = click_number + 1;
          var checkklass = 0;
          $("#block-views-portfel-block .views-row:last-child").remove();
          $("#block-views-portfel-block .views-row").each(function(){
            checkklass = classNumber(checkklass);
          });
            alert(checkklass);
            alert(click_number);
        });
    });
})(jQuery); 

