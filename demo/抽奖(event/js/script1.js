window.onload = function () {
  var myarr = ['1','2','3','4','5','6','7','8','9','10'];
  var title = document.getElementById('title');
  var play = document.getElementById('play');
  var stop = document.getElementById('stop');
  var t = null;
  var flag = 0;

  play.onclick = start;
  stop.onclick = pause;
  document.onkeyup = function (event) {
    var e = event || window.event;
    if (e.keyCode == 13){
      if (flag === 0){
        start();
      }else{
        pause();
      }
    } 
  };

  function start() {
    clearInterval(t);

    t = setInterval(function () {
      title.innerHTML = myarr[Math.floor(Math.random()*myarr.length)];
    },100);

    play.style.backgroundColor='#999';
    flag = 1;
  }

  function pause() {
    clearInterval(t);

    play.style.backgroundColor='#036';

    if (title.innerHTML == '5') {
    alert('恭喜你！获得'+title.innerHTML);
    }else{
    alert('谢谢参与！');
    }

    flag = 0;
  }

};