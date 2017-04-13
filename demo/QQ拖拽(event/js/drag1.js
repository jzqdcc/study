function claNm(cln,parent) {
  var myParent = parent?document.getElementById(parent):document;
  var classList = myParent.getElementsByTagName('*');
  var myClass = [];
  for(var i = classList.length-1;i>=0;i--){
    if(classList[i].className == cln){
      myClass.push(classList[i]);
    }
  }
  return myClass;
}

window.onload = drag;

function drag() {
  var myClick = claNm('login_logo_webqq','loginPanel')[0];
  myClick.onmousedown = fnDown;
  var oClose=document.getElementById('ui_boxyClose');
   oClose.onclick=function(){
      document.getElementById('loginPanel').style.display='none';
   };

  var loginState=document.getElementById('loginState'),
      stateList=document.getElementById('loginStatePanel'),
      lis=stateList.getElementsByTagName('li'),
      stateTxt=document.getElementById('login2qq_state_txt'),
      loginStateShow=document.getElementById('loginStateShow'), 
      oDrag=document.getElementById('loginPanel');

      loginState.onclick = function () {
        event.stopPropagation();
        stateList.style.display = 'block';
      };

      for (var i=lis.length-1;i>=0;i--){
        lis[i].onmouseover = function () {
          this.style.backgroundColor = '#000';
        };
        lis[i].onmouseout = function () {
          this.style.backgroundColor = '#fff';
        };
        lis[i].onclick = function () {
          event.stopPropagation();
          stateList.style.display = 'none';
          stateTxt.innerHTML = claNm('stateSelect_text',this.id)[0].innerHTML;
          loginStateShow.className = 'login-state-show '+this.id;
        };
      }
      document.onclick=function(){
      stateList.style.display='none';
      };

 function fnDown(event) {
    var leftX = event.clientX - oDrag.offsetLeft,
    topY = event.clientY -  oDrag.offsetTop;
    document.onmousemove = function (event) {
      var l = event.clientX - leftX,
          t = event.clientY - topY,
          winX = document.documentElement.clientWidth || document.body.clientWidth,
          winY = document.documentElement.clientHeight || document.body.clientHeight,
          maxX = winX-oDrag.offsetWidth,
          maxY = winY-oDrag.offsetHeight;
      if(l<=0){
        l=0;
      }else if(l>=maxX-10){
        l=maxX-10;
      }
      if(t<=10){
        t=10;
      }else if(t>=maxY){
        t=maxY;
      }
      oDrag.style.left = l + 'px';
      oDrag.style.top = t + 'px';
    };
    document.onmouseup = function(){
      document.onmousemove = null;
    };
  }
}