mui.init();



	
	//轮播自动开启
			var gallery = mui('.mui-slider');
			gallery.slider({
			  interval:1000//自动轮播周期，若为0则不自动播放，默认为0；
			});
	
//	var watchPosition = plus.geolocation.watchPosition(function(data){
//		var html = data.address.district+data.address.street;
//			mui('.mui-pull-left')[0].innerHTML = html;
//		},function(){
//			alert('定位失败...')
	
	mui.plusReady(function(){
		mui('.fun')[0].addEventListener('tap',function(){
			mui.openWindow('home-introduce.html','home-introduce.html')
			
		}),
		mui('.fun')[1].addEventListener('tap',function(){
			mui.openWindow('home-danger.html','home-danger.html')
			
		}),
		mui('.fun')[2].addEventListener('tap',function(){
			mui.openWindow('home-bank.html','home-bank.html')
			
		}),
		mui('.Novice-fun')[0].addEventListener('tap',function(){
			mui.openWindow('home-Novice.html','home-Novice.html')
			
		}),
		mui('.Novice-fun')[1].addEventListener('tap',function(){
			mui.openWindow('home-Novice.html','home-Novice.html')
			
		}),
		mui('.Novice-fun')[2].addEventListener('tap',function(){
			mui.openWindow('home-Novice.html','home-Novice.html')
			
		}),
		mui('.Novice-fun')[3].addEventListener('tap',function(){
			mui.openWindow('home-Novice.html','home-Novice.html')
			
		})
	})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

