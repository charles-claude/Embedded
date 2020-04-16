
$("#update").click(function(){
    var repeat = document.getElementById("repeat").checked;
    var DataJson = '{ "Repeat" : '+ repeat + '}'

    $.ajax({
        url: "127.0.0.1/config",
        method: "POST",
        data: DataJson,
        dataType : "json",
    })
});