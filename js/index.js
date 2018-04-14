mui.init();


mui.plusReady(function(){
	
	var page = [
		'home.html',
		'Discovery page.html',
		'goods.html',
		'person.html'
	];
	var styles = {
		top:"0px",
		bottom:"50px"
	};
	var sub = plus.webview.currentWebview();
	
	for(var i=0;i<page.length;i++){
		var item = plus.webview.create(page[i],page[i],styles);
		item.hide();
		sub.append(item);
	}
	plus.webview.show(page[0]);
	
	mui('.mui-bar-tab').on("tap",'a',function(){
		var href = this.getAttribute("href");
		plus.webview.show(href);
	})
	
})
      		



