(function(){
  var base_html = document.getElementById("wikibody").innerHTML;
  var m = base_html.match(/[^p]*.*?<p>[\S\s]*?(.*?)<br.*?[\S\s](.*?)<br.*?[\S\s]<br.*?[\S\s](BASIC|ADVANCED|EXTREME)<br.*?[\S\s]<br.*?[\S\s]Le.*?(\d+).*?[\S\s]BP.*?(\d+).*?[\S\s]No.*?\d+.*?<br.*?[\S\s].*?<br.*?[\S\s]/m);
  var fumen = base_html.substring(m[0].length+1, base_html.indexOf("不"));
  console.log(fumen);
})()
