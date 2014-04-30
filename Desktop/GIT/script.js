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
       var s = 0;
       
        $("#clickone").click(function() {
            var s = 0;
            $("#block-views-portfel-block .views-row:last-child").remove();
            $("#block-views-portfel-block .views-row").each(function(){
              s = s + 1;          
            });
        alert(s);
        });
        




    });
})(jQuery); 