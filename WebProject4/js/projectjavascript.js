$('body').imagesLoaded( function() {
  $('.banner').jSlidingBanner({ slideAnimationSpeed : 500,displayImageDuration : 3500
 });
});
$.ajax({
    url:"localdata.json",
    dataType:"json",
    type:"GET",
    success:function (data){
        for (let i=0;i<3;i++){
            $("#denem"+i+"").append(data["photos"][i].title2);
            $("#carousel"+i+"").append(data["photos"][i].title);
        }
    },
    error(){
        console.log("Connection Failed");
    }
})

