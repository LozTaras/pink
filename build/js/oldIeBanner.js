!function(){var r={init:function(){this.browser=this.searchString(this.dataBrowser)||"Other",this.version=this.searchVersion(navigator.userAgent)||this.searchVersion(navigator.appVersion)||"Unknown"},searchString:function(r){for(var i=0;i<r.length;i++){var t=r[i].string;if(this.versionSearchString=r[i].subString,-1!==t.indexOf(r[i].subString))return r[i].identity}},searchVersion:function(r){var i=r.indexOf(this.versionSearchString);if(-1!==i){var t=r.indexOf("rv:");return"Trident"===this.versionSearchString&&-1!==t?parseFloat(r.substring(t+3)):parseFloat(r.substring(i+this.versionSearchString.length+1))}},dataBrowser:[{string:navigator.userAgent,subString:"Edge",identity:"MS Edge"},{string:navigator.userAgent,subString:"MSIE",identity:"Explorer"},{string:navigator.userAgent,subString:"Trident",identity:"Explorer"},{string:navigator.userAgent,subString:"Firefox",identity:"Firefox"},{string:navigator.userAgent,subString:"Opera",identity:"Opera"},{string:navigator.userAgent,subString:"OPR",identity:"Opera"},{string:navigator.userAgent,subString:"Chrome",identity:"Chrome"},{string:navigator.userAgent,subString:"Safari",identity:"Safari"}]};r.init(),"Explorer"==r.browser&&r.version<=10&&document.write(1)}();