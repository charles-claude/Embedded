
$("#update").click(function(){
    var repeat = document.getElementById("repeat").checked
    var slow = document.getElementById("slow").checked
    var unique = document.getElementById("unique").checked
    var slowduration = document.getElementById("slowduration").value
    var botcolor = document.getElementById("colorpicker").value
    var samecolor = document.getElementById("samecolor").checked

    var bannword = document.getElementById("bword").value
    var bannlist = bannword.split(',')
    var DataJson = { Repeat :  repeat , Bannword : bannlist, Slow: slow, Unique: unique, Slowduration: slowduration, Color: botcolor, Samecolor: samecolor}

    var DataString = JSON.stringify(DataJson)
    console.log(DataString)

    $.ajax({
        url: "/config",
        method: "POST",
        data: DataString,
        dataType : "json",
        contentType: "application/json",
    })
});
