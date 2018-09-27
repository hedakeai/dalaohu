       //首页天气
	let weathers;
	$.ajax({
       type: "get",
       url:"https://www.toutiao.com/stream/widget/local_weather/data/?city",
       dataType: "jsonp",
       success:function(obj){
       	weathers=obj.data;
       	console.log(weathers);
              updata(weathers);
       }
	});
     function updata(weathers){
       $(".arrdess").html(weathers.city);
       //当前城市天气状况
       $(".tem").html(weathers.weather.current_temperature+"°");
       $(".tem-a").html(weathers.weather.current_condition);
       $(".wind").html(weathers.weather.wind_direction);
       $(".windstrong").html(weathers.weather.wind_level);
       $(".tempreture").html(weathers.weather.dat_low_temperature+"/"+weathers.weather.dat_high_temperature+"°");
       $(".esp").html(weathers.weather.tomorrow_low_temperature+"/"+weathers.weather.tomorrow_high_temperature+"°");
       $(".todaytem").attr("src","img/"+weathers.weather.weather_icon_id
+".png")
       $(".tomorrowtem").attr("src","img/"+weathers.weather.dat_weather_icon_id+".png")
       $(".tem1").html(weathers.weather.current_condition);
       $(".tem2").html(weathers.weather.tomorrow_condition);
       let hourly=$(weathers.weather.hourly_forecast)
       $(".hours ul").html("");
       hourly.each(function(index,val){
              let str=`<li class="item">
                                   <p class="item-time">${val.hour+":00"}</p>
                                   <img src="img/${val.weather_icon_id}.png" alt="" />
                                   <p class="item-degree">${val.temperature+"°"}</p>
                            </li>`
              $(".hours ul").append(str);
                       
       })

       let forest=$(weathers.weather.forecast_list)
       $(".srcoll").html("") ; 
       forest.each(function(index,val){
              let str=`<li class="item">
                                   <p class="date">${val.date.substr(5,5)}</p>
                                   <div class="datetime">
                                          <p class="weather">${val.condition}</p>
                                          <img src="img/${val.weather_icon_id}.png" alt="" class="icon"/>
                                   </div>
                                   <div class="night">
                                          <img src="img/${val.weather_icon_id}.png"/>
                                          <p class="weather">${val.condition}</p>
                                   </div>
                                   <p class="winds">${val.wind_direction}</p>
                                   <p class="winds">${val.wind_level}</p>
                            </li>`
              $(".srcoll").append(str); 
                         
       })

     }

     //城市设置
     let cityy;
     $.ajax({
       type: "get",
       url:"https://www.toutiao.com/stream/widget/local_weather/city/",
       dataType:"jsonp",
       success:function(jkl){
           cityy=jkl.data;
           updatacity(cityy)
           
       }
     });
     function updatacity(cityy){
       for(let i in cityy){
       for(let j in cityy[i]){
          let str=`<li class="item">${j}</li>`
          $(".city").append(str)
       }
     }
     }   


window.onload=function(){
       //input输入时
       $("input").focus(function(){
          $(".cancel").html("搜索")
       })
       $("input").blur(function(){
              $(".cancel").html("取消")
       })
       $(".cancel").click(function(){
              let texts=$("input").val()
              for(let i in cityy){
                     for(let j in cityy[i]){
                            if(texts==j){
                                   ajaxa(texts);
                                   return;
                            }
                     }
              }
              alert(1)
       })
       //单击单个城市时，出现每一个城市的天气
       let con;
      $(".city li").click(function(){
       $(".search-city").css({"display":"none"});
       $(".first").css({"display":"block"})
       let con=$(this).html();
           
            ajaxa(con);
      })
       function ajaxa(con){
        $.ajax({
              type:"get",
              url:`https://www.toutiao.com/stream/widget/local_weather/data/?city=${con}`,
              dataType:"jsonp",
              success:function(obj){
                con=obj.data;
                updata(con);
              }
       })
 }

       $(".location").click(function(){
       $(".search-city").css({"display":"block"});
       $(".first").css({"display":"none"});
      })
       $(".cancel").click(function(){
       $(".search-city").css({"display":"none"});
       $(".first").css({"display":"block"})
     })

       
   

}


//流程
// 获取默认城市的天气信息
// 获取所有城市的天气信息
// 点击某个城市获取当前城市的天气信息
// 在搜索框内输入所要搜索的城市，点击搜索按钮可以进行搜索