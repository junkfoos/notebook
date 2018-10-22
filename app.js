$(document).ready(function() {
 var currentPage = "page1";
    
    $("#save").click(function() {
        if (currentPage == "page1") {
            localStorage.setItem("page1", $("#notes").val());
        }
        else if (currentPage == "page2"){
            localStorage.setItem("page2", $("#notes").val());
        }           
        else if (currentPage == "page3") {
             localStorage.setItem("page3", $("#notes").val()); 
         }            
        console.log($("#notes").val());  
    
    });
    $("#p1").click(function(){   
        $("#notes").val(" "); 
        currentPage = "page1";
        var saved1 = localStorage.getItem("page1");
        $("#notes").val(saved1);
        console.log($("#notes").val());    
    });
    $("#p2").click(function(){
        $("#notes").val(" ");
        currentPage = "page2";
        var saved2 = localStorage.getItem("page2");
        $("#notes").val(saved2);
        console.log($("#notes").val());    
    });
    $("#p3").click(function(){
        $("#notes").val(" ");
        currentPage = "page3"
        var saved3 = localStorage.getItem("page3");
        $("#notes").val(saved3);
        console.log($("#notes").val()); 
    });
    
});