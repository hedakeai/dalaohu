//$(callback)==>页面加载完成时要执行的操作      相当于window.onload
$(function(){
//	alert(1);
    //$(选择器)----可以获取页面中的元素
    //1,基本选择器
    //id,元素,类名,
    let box=$(".box");
    console.log(box)
    let p=$("p");
    console.log(p)
    box.css({"background":"yellow"})
//  let text=$(.text);
    text.css=({"":""})
    let all=$("*");
    all.css({});
    let 
    //2,层级选择器
    //后代选择器
    let ele=$("form late")
//  子代选择器
    let ele=$("form>late")
    //
    let ele=$("form+lable")
    //
    //3,基本筛选器
})
