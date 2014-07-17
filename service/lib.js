/*
* Kypado javascript library 0.0.1
*
*/

var Kypado = {

//kypadoServiceUrlRoot: "http://www.kypado.com",
//kypadoServiceUrlRoot: "file://localhost/Users/vaidusia/Documents/hdocs/git/LS-page/",
kypadoServiceUrlRoot:  "http://localhost:8888/LS-pagecopy",

	load: function(clientid) {			

		var link = this.kypadoServiceUrlRoot + "/service/clients/" + clientid + "/privacy.html"
		var iframe = document.createElement('iframe');
		iframe.frameBorder=0;
		iframe.width="900px";
		iframe.height="90%";
		iframe.id="kypadoframe";
		iframe.setAttribute("src", link);
		iframe.style.position="fixed"; 
		iframe.style.left="50%"; 
		iframe.style.top="2%";
		iframe.style.marginLeft="-450px";
		iframe.style.zIndex="10000";
		iframe.style.boxShadow="0 5px 15px";
		iframe.style.borderRadius="5px";		

		var closeButton = document.createElement('button');
		closeButton.style.background = "url(" + this.kypadoServiceUrlRoot + "/service/images/ic_close.png)";
		closeButton.style.width = "50px"; 
		closeButton.style.height = "50px";
		closeButton.style.backgroundSize = "cover";
		closeButton.style.border="none";
		closeButton.style.position="fixed";
		closeButton.style.left="50%";
		closeButton.style.marginLeft="-475px";
		closeButton.style.top="2%";
		closeButton.style.zIndex="10001";
		closeButton.id="kypadoframeclose";

		$("body").append(iframe);
		$("body").append(closeButton);
		$("#kypadoframeclose").click(function(e) {
			Kypado.close();
		});

	},

	loadText: function(clientid) {
		var link = this.kypadoServiceUrlRoot + "/service/clients/" + clientid + "/privacy-text.html"
		var iframe = document.createElement('iframe');
		iframe.frameBorder=0;
		iframe.width="900px";
		iframe.height="90%";
		iframe.id="kypadoframe";
		iframe.setAttribute("src", link);
		iframe.style.position="fixed"; 
		iframe.style.left="50%"; 
		iframe.style.top="2%";
		iframe.style.marginLeft="-450px";
		iframe.style.zIndex="10000";
		iframe.style.boxShadow="0 5px 15px";
		iframe.style.borderRadius="5px";		

		var closeButton = document.createElement('button');
		closeButton.style.background = "url(" + this.kypadoServiceUrlRoot + "/service/images/ic_close.png)";
		closeButton.style.width = "50px"; 
		closeButton.style.height = "50px";
		closeButton.style.backgroundSize = "cover";
		closeButton.style.border="none";
		closeButton.style.position="fixed";
		closeButton.style.left="50%";
		closeButton.style.marginLeft="-475px";
		closeButton.style.top="2%";
		closeButton.style.zIndex="10001";
		closeButton.id="kypadoframeclose";

		$("body").append(iframe);
		$("body").append(closeButton);
		$("#kypadoframeclose").click(function(e) {
			Kypado.close();
		});
	},

	loadVisuals: function(clientid) {
		var link = this.kypadoServiceUrlRoot + "/service/clients/" + clientid + "/privacy-visuals.html"
		var iframe = document.createElement('iframe');
		iframe.frameBorder=0;
		iframe.width="900px";
		iframe.height="90%";
		iframe.id="kypadoframe";
		iframe.setAttribute("src", link);
		iframe.style.position="fixed"; 
		iframe.style.left="50%"; 
		iframe.style.top="2%";
		iframe.style.marginLeft="-450px";
		iframe.style.zIndex="10000";
		iframe.style.boxShadow="0 5px 15px";
		iframe.style.borderRadius="5px";		

		var closeButton = document.createElement('button');
		closeButton.style.background = "url(" + this.kypadoServiceUrlRoot + "/service/images/ic_close.png)";
		closeButton.style.width = "50px"; 
		closeButton.style.height = "50px";
		closeButton.style.backgroundSize = "cover";
		closeButton.style.border="none";
		closeButton.style.position="fixed";
		closeButton.style.left="50%";
		closeButton.style.marginLeft="-475px";
		closeButton.style.top="2%";
		closeButton.style.zIndex="10001";
		closeButton.id="kypadoframeclose";

		$("body").append(iframe);
		$("body").append(closeButton);
		$("#kypadoframeclose").click(function(e) {
			Kypado.close();
		});
	},

	loadVideo: function(clientid) {
		var link = this.kypadoServiceUrlRoot + "/service/clients/" + clientid + "/privacy-video.html"
		var iframe = document.createElement('iframe');
		iframe.frameBorder=0;
		iframe.maxWidth="100%"
		iframe.width="900px";
		iframe.height="90%";
		iframe.id="kypadoframe";
		iframe.setAttribute("src", link);
		iframe.style.position="fixed"; 
		iframe.style.left="50%"; 
		iframe.style.top="2%";
		iframe.style.marginLeft="-450px";
		iframe.style.zIndex="10000";
		iframe.style.boxShadow="0 5px 15px";
		iframe.style.borderRadius="5px";		

		var closeButton = document.createElement('button');
		closeButton.style.background = "url(" + this.kypadoServiceUrlRoot + "/service/images/ic_close.png)";
		closeButton.style.width = "50px"; 
		closeButton.style.height = "50px";
		closeButton.style.backgroundSize = "cover";
		closeButton.style.border="none";
		closeButton.style.position="fixed";
		closeButton.style.left="50%";
		closeButton.style.marginLeft="-475px";
		closeButton.style.top="2%";
		closeButton.style.zIndex="10001";
		closeButton.id="kypadoframeclose";

		$("body").append(iframe);
		$("body").append(closeButton);
		$("#kypadoframeclose").click(function(e) {
			Kypado.close();
		});
	},

	close: function() {
		$("#kypadoframe").remove();
		$("#kypadoframeclose").remove();
	}

}