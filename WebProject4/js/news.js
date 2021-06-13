$.ajax({
    url:"https://api.flickr.com/services/feeds/photos_public.gne?%22%20+%22id=82407828@N07&format=json&jsoncallback=?&tags=movie",
    dataType:"json",
    type:"GET",
    success:function (data){
        for (let i=0;i<8;i++){
            $("#imgitem"+i+"").append(data["items"][i].media.m);
           console.log(data["items"][i].media.m);
        }
    },
    error(){
        console.log("Connection Failed");
    }
})