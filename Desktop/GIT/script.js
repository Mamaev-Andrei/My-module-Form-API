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
function countElems() {          
    $("#clickone").click(function() {
        var checkklass = 0;
        $("#block-views-portfel-block .views-row").each(function(){
          checkklass = checkklass + 1;
        }); 
        alert (checkklass);
    });   
}
var clicki = 0;
function countClick() {
    $("#clickone").click(function() {
        clicki = clicki + 1;
        $("#block-views-portfel-block .views-row:last-child").remove();
        alert (clicki);
    });   
}
function countAll() {
    countClick();
    countElems(); 
}
   countAll();
  
   
    });
})(jQuery); 