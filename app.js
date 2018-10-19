$(document).ready(function() {
 var currentPage = "page1";
    
    $("#save").click(function() {
        //if () {
        localStorage.setItem("#page1", $("#notes").val());
   // }
                     
                     
        localStorage.setItem("#page2", $("#notes").val());
        localStorage.setItem("#page3", $("#notes").val()); 
        console.log($("#notes").val());  
    
    });
    $("#load").click(function() {
        $("#notes").val(localStorage.getItem("#notes"));
        $("#notes2").val(localStorage.getItem("#notes"));
        $("#notes3").val(localStorage.getItem("#notes"));
    });
    $("#p1").click(function(){   
        $("#notes").val(" "); 
        currentPage = "page1";
        localStorage.setItem("#page1Saved","page1");
        console.log($("#notes").val());    
    });
    $("#p2").click(function(){
        $("#notes").val(" ");
        currentPage = "page2";
        localStorage.setItem("#page2Saved","page2");
        console.log($("#notes").val());    
    });
    $("#p3").click(function(){
        $("#notes").val(" ");
        currentPage = "page3"
        localStorage.setItem("#Page3Saved","page3");
        console.log($("#notes").val()); 
    });
    
});