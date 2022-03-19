$(document).ready(function() {
    $("#title").hide();
    
    
    $("#image1").mouseover(function(){
        $("#image2").css("opacity", "0.5");
        $("#image3").css("opacity", "0.5");
        $("#title").show();
        $("#overlay").show();
        document.getElementById("title").innerHTML = "The Large Plane Trees, 1889";
    });
    
    $("#image1").mouseout(function(){
        $("#image2").css("opacity", "1");
        $("#image3").css("opacity", "1");
        $("#title").hide(); /*Ya know that u look cute today?*/
        $("#overlay").hide();
    });
    
    
    $("#image2").mouseover(function(){
        $("#image1").css("opacity", "0.5");
        $("#image3").css("opacity", "0.5");
        $("#title").show();
        $("#overlay").show();
        document.getElementById("title").innerHTML = "Enclosed Field with Peasant, 1889";
    });
    
    $("#image2").mouseout(function(){
        $("#image1").css("opacity", "1");
        $("#image3").css("opacity", "1");
        $("#title").hide();
        $("#overlay").hide();
    });
    
    
    $("#image3").mouseover(function(){
        $("#image1").css("opacity", "0.5");
        $("#image2").css("opacity", "0.5");
        $("#title").show();
        $("#overlay").show();
        document.getElementById("title").innerHTML = "Harvest, 1888";
    });
    
    $("#image3").mouseout(function(){
        $("#image1").css("opacity", "1");
        $("#image2").css("opacity", "1");
        $("#title").hide();
        $("#overlay").hide();
    });
    
    /*Second page*/
    
    $("#image4").mouseover(function(){
        $("#image5").css("opacity", "0.5");
        $("#image6").css("opacity", "0.5");
        $("#title").show();
        $("#overlay").show();
        document.getElementById("title").innerHTML = "Garden at Arles, 1888";
    });
    
    $("#image4").mouseout(function(){
        $("#image5").css("opacity", "1");
        $("#image6").css("opacity", "1");
        $("#title").hide();
        $("#overlay").hide();
    });
    
    
    $("#image5").mouseover(function(){
        $("#image4").css("opacity", "0.5");
        $("#image6").css("opacity", "0.5");
        $("#title").show();
        $("#overlay").show();
        document.getElementById("title").innerHTML = "Starry Night Over the Rhône, 1888";
    });
    
    $("#image5").mouseout(function(){
        $("#image4").css("opacity", "1");
        $("#image6").css("opacity", "1");
        $("#title").hide();
        $("#overlay").hide();
    });
    
    $("#image6").mouseover(function(){
        $("#image4").css("opacity", "0.5");
        $("#image5").css("opacity", "0.5");
        $("#title").show();
        $("#overlay").show();
        document.getElementById("title").innerHTML = "Peach Trees In Bloom, 1889";
    });
    
    $("#image6").mouseout(function(){
        $("#image4").css("opacity", "1");
        $("#image5").css("opacity", "1");
        $("#title").hide();
        $("#overlay").hide();
    });
    
    /*Third page*/
    
    $("#image7").mouseover(function(){
        $("#image8").css("opacity", "0.5");
        $("#image9").css("opacity", "0.5");
        $("#title").show();
        $("#overlay").show();
        document.getElementById("title").innerHTML = "Green Wheat Field with Cypress, 1889";
    });
    
    $("#image7").mouseout(function(){
        $("#image8").css("opacity", "1");
        $("#image9").css("opacity", "1");
        $("#title").hide();
        $("#overlay").hide();
    });
    
    
    $("#image8").mouseover(function(){
        $("#image7").css("opacity", "0.5");
        $("#image9").css("opacity", "0.5");
        $("#title").show();
        $("#overlay").show();
        document.getElementById("title").innerHTML = "Wheat field under thunderclouds, 1890";
    });
    
    $("#image8").mouseout(function(){
        $("#image7").css("opacity", "1");
        $("#image9").css("opacity", "1");
        $("#title").hide();
        $("#overlay").hide();
    });
    
    
    $("#image9").mouseover(function(){
        $("#image7").css("opacity", "0.5");
        $("#image8").css("opacity", "0.5");
        $("#title").show();
        $("#overlay").show();
        document.getElementById("title").innerHTML = "Wheat field with cypress, 1889";
    });
    
    $("#image9").mouseout(function(){
        $("#image7").css("opacity", "1");
        $("#image8").css("opacity", "1");
        $("#title").hide();
        $("#overlay").hide();
    });
});