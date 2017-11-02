// 提炼播放器双控节点
	var play = $("#video").getElementsByTagName("a")[0];
	var vPlay = $("#video").getElementsByTagName("div")[1];
	var video = $("#hiddenVideo").children[0];
	var cancel = $("#hiddenVideo").getElementsByTagName("a")[0];
// 提炼伸缩图片双控节点
	var picShow = $("#picShow").getElementsByTagName("img");


// 构建导航跟随页面术式
	// setInterval(check,1);
	// function check(){
	// 	var top = document.body.scrollTop||document.documentElement.scrollTop;
	// 	if(top > 450){
	// 		$("#gameNav").className = "lock";
	// 	}else if(top <= 450){
	// 		$("#gameNav").className = "";
	// 	}
	// }
	document.onscroll = function(){
		var top = document.body.scrollTop||document.documentElement.scrollTop;
		if(top > 450){
			$("#gameNav").className = "lock";
		}else if(top <= 450){
			$("#gameNav").className = "";
		}
	}

// 新丶跟随页面术式
	// setInterval(check,1);
	// function check(){
	// 	var top = document.body.scrollTop||document.documentElement.scrollTop;
	// 	if(top > 450){
	// 		$("#gameNav").className = "lock";
	// 	}else if(top <= 450){
	// 		$("#gameNav").className = "";
	// 	}
	// }

// 构造播放触发术式
	vPlay.onmouseover = function(){
		this.className = "vPlay vHover";
	}
	vPlay.onmouseout = function(){
		this.className = "vPlay";
	}
	vPlay.onclick = function(){
		$("#hiddenVideo").style.display = "block";
		document.body.style.overflow = "hidden";

		// 播放模态框退出方式多样化
		document.onclick = function(event){
			var event = event || window.event;
			// IE678&其他浏览器的兼容
			var targetId = event.target? event.target.id : event.srcElement.id;
			if(targetId == "hiddenVideo"){
				video.pause();
				$("#hiddenVideo").style.display = "none";
				document.body.style.overflow = "visible";
			}
		}
	}
	cancel.onclick = function(){
		video.pause();
		$("#hiddenVideo").style.display = "none";
		document.body.style.overflow = "visible";
	}


// 构建伸缩图触发术式
	for(var p = 0 ; p < picShow.length ; p++){
		picShow[p].onmouseover = function(){
			this.style.transform = "scale(1)";
		}
		picShow[p].onmouseout = function(){
			this.style.transform = "scale(0.9)";
		}
	}


 // 构造多用型&组合型术式
	
	// 缓动返回顶部自动术式核心构成
	function back(){}