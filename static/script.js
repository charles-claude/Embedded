
$("#update").click(function(){
    var repeat = document.getElementById("repeat").checked;
    var bannword = document.getElementById("bword").value
    var bannlist = bannword.split(',')
    var DataJson = { Repeat :  repeat , Bannword : bannlist}
    var DataString = JSON.stringify(DataJson)


    $.ajax({
        url: "/config",
        method: "POST",
        data: DataString,
        dataType : "json",
        contentType: "application/json",
    })
});
