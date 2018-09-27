$(function () {
	let weathers;
	$.ajax({
       type: "get",
       url:"https://www.toutiao.com/stream/widget/local_weather/city/",
       detaType: "jsonp",
       success:function(obj){
       	weathers=obj.data;
       	console.log(weathers)
       }
	});

})