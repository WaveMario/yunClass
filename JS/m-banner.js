// 轮播
(function(){
  //获取banner DOM
  var picture= getElementsByClassName(document,"banner");
  //获取point DOM
  var point= getElementsByClassName(document,"m-point")[0];
  var index= point.getElementsByTagName("i");
  var i= 1;
  var during= 500;
  var intrvl= 20;
  var count= Math.floor(during/intrvl);
  var offset= 1/count;
  //全局变量
  var wait;
  var fadein;
  //banner-wait
  function bannerwait(){
  	wait= setTimeout(bannerrun,5000);
  }
  //banner-run
  function bannerrun(){
  	if(flag){bannerwait()}
  	  else{
  	  	i=i%3;
  	  	picture[i].className= picture[i].className.replace(" none"," visible")
  	  	picture[(i+1)%3].className= picture[(i+1)%3].className.replace(" visible"," none")
  	  	picture[i].style.opacity= 0;
  	  	picture[(i+2)%3].className= picture[(i+2)%3].className.replace(" visible"," none")
  	  	index[i].className= index[i].className.replace("","current")
  	  	index[(i+1)%3].className= index[(i+1)%3].className.replace("current","")
  	  	index[(i+2)%3].className= index[(i+2)%3].className.replace("current","")
  	  	function step(){
  	  	  if(parseFloat(picture[i].style.opacity)+offset<1){
  	  	  	picture[i].style.opacity= parseFloat(picture[i].style.opacity)+offset;
  	  	  }else{
  	  	  	picture[i].style.opacity= 1;
  	  	  	clearInterval(fadein);
  	  	  	i++;
  	  	  	bannerwait();
  	  	  }
  	  	}
  	  	fadein= setInterval(step,intrvl);
  	  }
  }
  //banner:hover
  var flag= false;
  for(var j=0;j<3;j++){
    addEvent(picture[j],"mouseenter",function(){
      flag= true;
    });
    addEvent(picture[j],"mouseleave",function(){
      flag= false;
    });
  };
  //point click
  for(var j=0;j<3;j++){
  	addEvent(index[j],"click",function(event){
  	  clearTimeout(wait);
  	  clearInterval(fadein);
  	  event= event || window.event;
  	  var tag = event.target || event.srcElement;
  	  i= parseInt(tag.innerText || tag.textContent);
  	  bannerrun();
  	});
  };
  //轮播开始, 第一幅图等待
  bannerwait()
})();