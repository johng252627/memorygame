$(document).ready(function(){
    $("#puzzle1").one("click", function(){
        $("#memorise1").text("Result").delay(2000).queue(function(next){
            $(this).text("Test");
            next();
        });
    });
});

$(document).ready(function(){
    $("#puzzle2").click(function(){
        $("#memorise2").text("Result").delay(2000).queue(function(next){
            $(this).text("Test");
            next();
        });
    });
});

$(document).ready(function(){
    $("#puzzle3").click(function(){
        $("#memorise3").text("Result").delay(2000).queue(function(next){
            $(this).text("Test");
            next();
        });
    });
});

$(document).ready(function(){
    $("#puzzle4").click(function(){
        $("#memorise4").text("Result").delay(2000).queue(function(next){
            $(this).text("Test");
            next();
        });
    });
});

$(document).ready(function(){
    $("#puzzle5").click(function(){
        $("#memorise5").text("Result").delay(2000).queue(function(next){
            $(this).text("Test");
            next();
        });
    });
});

$(document).ready(function(){
    $("#puzzle6").click(function(){
        $("#memorise6").text("Result").delay(2000).queue(function(next){
            $(this).text("Test");
            next();
        });
    });
});