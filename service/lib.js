/*
* Kypado javascript library 0.0.1
*
*/

var Kypado = {

	kypadoServiceUrlRoot: "http://127.0.0.1/projects/LS-page/",
	//kypadoServiceUrlRoot: "http://localhost:8888/git/LS-page/",
	
	loadCss: function() {
		var styles = "@import url(' " + this.kypadoServiceUrlRoot + "/service/css/kypado.css ');";
  		var newSS=document.createElement('link');
  		newSS.rel='stylesheet';
  		newSS.href='data:text/css,'+escape(styles);
  		document.getElementsByTagName("head")[0].appendChild(newSS);
	},

	attachButtons: function(clientid, docType) {

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

		var docTypeButtonContainer = document.createElement('div');
		docTypeButtonContainer.id="kp-doc-frame-button-container";

		var displayModeSimpleButton = document.createElement('button');
		displayModeSimpleButton.id="kp-doc-frame-button-simple";
		displayModeSimpleButton.className="kp-doc-frame-button"
		displayModeSimpleButton.innerHTML="Simple"

		var displayModeFullButton = document.createElement('button');
		displayModeFullButton.id="kp-doc-frame-button-full";
		displayModeFullButton.className="kp-doc-frame-button"
		displayModeFullButton.innerHTML="Full"

		docTypeButtonContainer.appendChild(displayModeSimpleButton);
		docTypeButtonContainer.appendChild(displayModeFullButton);
		$("body").append(closeButton);
		$("body").append(docTypeButtonContainer);

		$("#kypadoframeclose").click(function(e) {
			Kypado.close();
		});
		$("#kp-doc-frame-button-simple").click(function(e) {
			Kypado.close();
			Kypado.loadVisuals(clientid);
		});

		$("#kp-doc-frame-button-full").click(function(e) {
			Kypado.close();
			Kypado.loadText(clientid);			
		});

		zIndexTop = 10000;
		zIndexBottom = 9999;
		var buttonSimple = $("#kp-doc-frame-button-simple");
		var buttonFull = $("#kp-doc-frame-button-full");
		switch (docType) {
		    case "visuals":
		    	var topElement = buttonSimple;
		    	var bottomElement = buttonFull;
		        topElement.addClass("kp-doc-frame-button-current");
		        topElement.css( "zIndex", zIndexTop );
				bottomElement.removeClass("kp-doc-frame-button-current");
				bottomElement.css( "zIndex", zIndexBottom );
		        break;
		    case "text":
		        var topElement = buttonFull;
		    	var bottomElement = buttonSimple;
		        topElement.addClass("kp-doc-frame-button-current");
		        topElement.css( "zIndex", zIndexTop );
				bottomElement.removeClass("kp-doc-frame-button-current");
				bottomElement.css( "zIndex", zIndexBottom );
		        break;
		}
	},

	load: function(clientid) {
		this.loadCss();	

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

		$("body").append(iframe);
		this.attachButtons(clientid);
	},

	loadText: function(clientid) {
		this.loadCss();
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

		$("body").append(iframe);
		this.attachButtons(clientid, "text");
	},

	loadVisuals: function(clientid) {
		this.loadCss();
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

		$("body").append(iframe);
		this.attachButtons(clientid, "visuals");
	},

	loadVideo: function(clientid) {
		this.loadCss();
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

		$("body").append(iframe);
		this.attachButtons(clientid);
	},

	close: function() {
		$("#kypadoframe").remove();
		$("#kypadoframeclose").remove();
		$("#kp-doc-frame-button-container").remove();
	}

}