
$(".update").click(function(){
    var repeat = document.getElementById("repeat").checked;
    var DataJson = '{ "Repeat" : '+ repeat + '}'
    
    $.ajax({
        url: "/config",
        method: "POST",
        data: DataJson,
        dataType : "json",
    })
});