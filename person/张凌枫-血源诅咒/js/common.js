// 提炼导航节点
	var navD = $("#nav").getElementsByTagName("dl");
// 提炼游戏导航节点
	var gameA = $("#gameNav").getElementsByTagName("a");
// 提炼返回顶部双控节点
	var tA = $("#goTop").getElementsByTagName("a")[0];
	
// 构造导航触发术式
	for(var i = 0 ; i < navD.length ; i ++){
		navD[i].onmouseover = function(){
			this.style.height = "245px";
			this.getElementsByTagName("dt")[0].className = "bgcolor";
		}
		navD[i].onmouseout = function(){
			this.style.height = "65px";
			this.getElementsByTagName("dt")[0].className = "";
		}
	}

// 构造血源诅咒游戏导航字体变色
	for(var gA = 0 ; gA < gameA.length ; gA++){
		gameA[gA].onmouseover = function(){
			this.className = "colorChange";
		}
		gameA[gA].onmouseout = function(){
			this.className = "";
		}
	}

// 构建返回顶部触发术式
 	tA.onmouseover = function(){
 		this.style.textShadow = "0px 0px 10px skyblue,0px 0px 10px skyblue,0px 0px 10px skyblue";
 	}
 	tA.onmouseout = function(){
 		this.style.textShadow = "0px 0px 30px skyblue";
 	}
 	
 	// 构筑返回顶部的缓动
 	tA.onclick = function(){
 		scrollTo(0,0);
 		setInterval(back,20);
 	}

