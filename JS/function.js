// getElementsByClassNameºÊ»›
function getElementsByClassName (element,names) {
  if(element.getElementsByClassName){
    return element.getElementsByClassName(names);
  }else{
    var elements= element.getElementsByTagName("*");
    var result= [];
    var element,classNameStr,flag;
    names= names.split(" ");
    for(var i=0;element= elements[i];i++){
      classNameStr= " "+element.className+" ";
      flag= true;
      for(var j=0,name;name=names[j];j++){
        if(classNameStr.indexOf(" "+name+" ")== -1){
          flag= false;
          break;
        }
      }
      if(flag){
        result.push(element);
      }
    }
    return result;
  }
}
// addEventºÊ»›
var addEvent= document.addEventListener ? 
  function(ele,type,listener,useCapture){
    ele.addEventListener(type,listener,useCapture);
  } : 
  function(ele,type,listener,useCapture){
    ele.attachEvent("on"+type,listener);
  };
// XMLHttpRequestºÊ»› - createXHR
function createXHR(){
  if(typeof XMLHttpRequest != "undefined"){
    return new XMLHttpRequest();
  }else if(typeof ActiveXObject != "undefined"){
    if(typeof arguments.callee.activeXString != "string"){
      var versions = ["MSXML2.XMLHttp.6.0","MSXML2.XMLHttp.3.0","MSXML2.XMLHttp"],i,len;
      for(i=0,len=versions.length;i<len;i++){
        try{
          new ActiveXObject(versions[i]);
          arguments.callee.activeXString= versions[i];
          break;
        } catch (ex){
          alert(ex.message);
        }
      }      
    }
    return new ActiveXObject(arguments.callee.activeXString);
  }else {
    throw new Error("No XHR object available.");
  }
}
// ºÊ»›firstElementChild
function firstElementChild(ele){
  if(!ele.firstChild) return false;
  return ele.firstElementChild || (ele.firstChild.nodeType == 1 ? ele.firstChild : nextNode(ele.firstChild) );
}
// ºÊ»›£¨∂®“ÂremoveEvent()∫Ø ˝
var removeEvent= document.removeEventListener ?
  function(ele,type,listener,useCapture){
    ele.removeEventListener(type,listener,useCapture);
  } :
  function(ele,type,listener,useCapture){
    ele.detachEvent("on"+type,listener);
  };