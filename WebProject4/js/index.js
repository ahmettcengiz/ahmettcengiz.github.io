$("document").ready(function () {
    $.ajax({
        url:"deneme.json",
        dataType:"json",
        type:"GET",
        success:function (data){
            for (var i=0;i<3;i++){
                $("#carousel"+i+"").append(data["photos"][i].title);
            }
        },
        error(){
            console.log("Connection Failed");
        }
    })

});
