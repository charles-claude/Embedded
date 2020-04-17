
$("#update").click(function(){
    var repeat = document.getElementById("repeat").checked
    var slow = document.getElementById("slow").checked
    var unique = document.getElementById("unique").checked
    var slowduration = document.getElementById("slowduration").value
    var botcolor = document.getElementById("color").value
    var samecolor = document.getElementById("samecolor").checked
    var bannword = document.getElementById("bword").value;
    if(bannword.length != 0) {
        var bannlist = bannword.split(',')
    }
    else {
        var bannlist = []
    }
    var DataJson = { Repeat :  repeat , Bannword : bannlist, Slow: slow, Unique: unique, Slowduration: slowduration, Color: botcolor, Samecolor: samecolor}
    console.log(DataJson)

    $.ajax({
        url: "/config",
        method: "POST",
        data: DataJson,
        dataType : "json",
        contentType: "application/json",
    })
});
