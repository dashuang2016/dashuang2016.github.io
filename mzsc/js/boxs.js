function $(id){
	return typeof id==='string'?document.getElementById(id):id;
}
 // 页面加载完毕后执行脚本
window.onload=function(){
	//获取鼠标滑过或点击的标签和要切换内容的元素
	
	//找到box-titles下所有的li并赋值给titles
	var titles=$("box-title").getElementsByTagName("li");
	    // 找到notive-con下的所有div并赋值给divs
	 	divs=$("notice-con").getElementsByTagName("div"); 
	 	// 判断标签和内容容器个数是否相等，不相等则返回
	 	if(titles.length!=divs.length)
	 		return;
	 	// 遍历所有boxs-title下的li
	 	for(var i=0;i<titles.length;i++){
	 		// 给每个li创建对应的id
	 		titles[i].id=i;
	 		// 当点击某个li该标签时，执行函数
	 		titles[i].onclick=function(){
	 			// 遍历所有notive-con下的div
	 			for(var j=0;j<titles.length;j++){
	 				// 相同id的titles下的li，class为空
	 				titles[j].className="";
	 				// 相同id下的div display属性为none，隐藏
	 				divs[j].style.display="none";
	 			};
	 			// 当前选中的li class为select
	 			this.className="select";
	 			// 与当前li索引相同的div display为block，显示出来
	 			divs[this.id].style.display="block";
	 		};
	 		
	 	};
};