function $(id){
	var date = id.slice(0,1);
	switch (date){
		case "#":
			return document.getElementById(id.slice(1));
		case ".":
			return getClassName(id.slice(1));
		default:
			return document.getElementsByTagName(id);
	} 
	return document.getElementById(id);
}
// 获取特定id内部的类名，没有id也行，兼容性已解决
function getClassName(name,id){
	// 如果浏览器可辨别getElementByClassName
	if(document.getElementsByClassName){	//判定是否传入id
		if(arguments.length == getClassName.length){
			var cid = document.getElementById(id);
			return cid.getElementsByClassName(name);
		}else{
			return document.getElementsByClassName(name);
		}
	}else{
		// 当浏览器不可辨别getElementByClassName解决方法
		if(arguments.length == getClassName.length){	//判定是否传入id
			var cid = document.getElementById(id);
			var cname = cid.getElementsByTagName("*");	//获取id下面的所有节点
		}else{
			var cname = document.getElementsByTagName("*");	//无id时，获取所有节点
		}
		arr = [];
		for(var i = 0 ; i < cname.length ; i++){
			var tagName = cname[i].className.split(" ");
			for(var j = 0 ; j < tagName.length ; j++){
				if(tagName[j] == name){
					arr.push(cname[i]);
				}
			}
		}
	}
	return arr;
}



