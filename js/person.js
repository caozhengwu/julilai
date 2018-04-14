mui.init();

	mui.plusReady(function(){
		var img = document.createElement("img");
		mui("#btn")[0].addEventListener("tap",function(){
			img.src="";
			var cm = plus.camera.getCamera( 1 );
			cm.captureImage(function(path){
				img.src = "file://"+plus.io.convertLocalFileSystemURL(path);
				img.style.width = '50px';
				img.style.height = '50px';						
			});
			
		})
		mui('#head_sculpture')[0].appendChild(img);
	})