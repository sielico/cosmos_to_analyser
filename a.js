(function(){
  var base_html;
  if(document.getElementById("wikibody")!=null){
    base_html = document.getElementById("wikibody").innerHTML;
  }else{
    var temp = document.body.innerHTML;
    base_html = temp.substring(temp.indexOf("wrapper"));
  }
  var m = base_html.match(/[.\S\s]*?<p>[\S\s]*?(.*?)<br.*?[\S\s](.*?)<br.*?[\S\s]<br.*?[\S\s](BASIC|ADVANCED|EXTREME)<br.*?[\S\s]<br.*?[\S\s]Le.*?(\d+).*?[\S\s]BP.*?(\d+).*?[\S\s]No.*?\d+.*?<br.*?[\S\s].*?<br.*?[\S\s]/m);
  console.log(m);
  var m0 = m[0];
  var m1 = m[1];
  var m2 = m[2];
  var m3 = m[3];
  var m4 = m[4];
  var m5 = m[5];
  var t = "t=" + m5 + "<br />";
  var o = "o=0<br />";
  var m = '//m="' + m1 + '.mp3"<br />';
  var level = "#lev=" + m4 + "<br />";
  var title = '#title="' + m1 + '"<br />';
  var artist = '#artist="' + m2 + '"<br />';
  var jacket = "//#jacket=\"" + m1 + '.png"<br />';
  var memo2 = "#memo2<br />";
  var fumen = base_html.substring(m0.length+1, base_html.indexOf("不"));
  var hold = "";
  if(fumen.indexOf("href")>0){
    hold = "#holdbarrow=1<br />";
  }
  var out_html = "<div align=left>" + t + o + m + level + title + artist + jacket + hold + memo2 + fumen + "</div>";
  document.body.innerHTML = out_html;
})()
