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
        var click_number = 0;
        $("#clickone").click(function() {
            var class_number = 0;
            click_number = click_number + 1;
            $("#block-views-portfel-block .views-row:last-child").remove();
            $("#block-views-portfel-block .views-row").each(function(){
             class_number = class_number + 1;
            });
                 alert(click_number);
                 alert(class_number);
        });
        




    });
})(jQuery); 