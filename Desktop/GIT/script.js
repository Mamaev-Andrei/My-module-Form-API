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
function countElems() {          
    $("#clickone").click(function() {
        var checkklass = 0;
        $("#block-views-portfel-block .views-row").each(function(){
            checkklass = classNumber(checkklass);
        }); 
        alert (checkklass);
    });   
}
function clickNumber(b) { 
    return b + 1;
}
var clicki = 0;
function countClick() {
    $("#clickone").click(function() {
        clicki = clickNumber(clicki);
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