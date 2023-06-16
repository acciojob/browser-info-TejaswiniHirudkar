//your JS code here. If required.
var infodiv=document.getElementById("brower-info");
var name=navigator.appName;
var version=navigator.appVersion;
var message="You are using "+name+" version "+version;
infodiv.textContent=message;
