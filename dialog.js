debugger;

var regExp = new RegExp("engadget");

if(regExp.test(document.URL)) { //url matches
	//alert("url does match!");

	var body = $("body");

	var div = $("<div>")
    .addClass("focus")
    .css({"width": "90%",
          "height": "90%",
          "background": 'rgb(244,0,0)',
          "left": "5%",
          "top": "5%", 
          "position": "fixed",
          "z-index": 9999999999
    })
    .appendTo("body");

} else {
	// alert("url doesn't match!");
}
