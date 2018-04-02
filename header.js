!function() {
    var path = document.location.pathname;
    var dir = /^.*\/([a-z]+)\//.exec(path)[1];
    var filename = path.substring(path.lastIndexOf('/')+1);
    document.write([
        '<div id="header">',
        '<h3>Chart Demo</h3>',
        '<div id="links" style="padding:10px 0px 0px 10px">',
        
        '<hr>',
        '</div>'
    ].join(''));
    window.onload = function() {
        d3.select('#version').text('v' + dc.version);
    };
}();
