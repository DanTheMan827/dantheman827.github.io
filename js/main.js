---
layout: null
---
{% include_relative markdown.js %}

function writeChangelog(data){
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  var html = "";
  for (var x = 0, lenX = data.data.length; x < lenX; x++){
    var release = data.data[x],
        assets = release.assets;
    if(x > 0){
      html = html + "<hr />";
    }
    html = html + "<div class=\"release\">";
    html = html + ("<h2>Version " + release.name + "</h2>");
    
    html = html + (marked.parse(release.body));
    html = html + "<div class=\"downloads\">";
    html = html + ("<h3>Downloads</h3>");
    html = html + ("<ul class=\"fa-ul release-downloads\">");
    for (var y = 0, lenY = assets.length; y < lenY; y++){
      var asset = assets[y];
      html = html + ("<li><a href=\"" + asset.browser_download_url + "\"><i class=\"fa-li fa fa-file\"></i><b>" + asset.name + "</b> (downloaded " + numberWithCommas(asset.download_count) + " times)</a></li>")
    }
    html = html + ("<li><a href=\"" + release.zipball_url + "\"><i class=\"fa-li fa fa-file-archive-o\"></i><b>Source code</b> (zip)</a></li>")
    html = html + ("<li><a href=\"" + release.tarball_url + "\"><i class=\"fa-li fa fa-file-archive-o\"></i><b>Source code</b> (tar.gz)</a></li>")
    html = html + ("</ul>");
    html = html + "</div>"; 
    html = html + "</div>";
  }
  document.write(html);
}