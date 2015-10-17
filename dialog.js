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

/**
 * @param {string} categoryId Category id to get random question
 * @return {Object} Answer with question
 */
function getRandomQuestion(categoryId) {
  var url = "http://jservice.io";
  var apiURL = "/api/category"
  var out = {}
  var results = {};
  var request = new XMLHttpRequest();
  url = url + apiURL + "?id=" + categoryId;
  request.open('GET', url, false);
  request.send(null);
  if(request.status == 200) {
     results = JSON.parse(request.responseText).clues;
  }
  var rand = Math.floor((Math.random() * results.length));
  return results[rand];
}

/**
 * @param {string} textFieldId ID of text field with user's answer
 * @param {Object} clue JS object that represents question
 * @return {bool} Return true if answers matches
 */
function checkAnswer(textFieldId, clue) {
  var userAnswer = document.getElementById(textFieldId).value.toLowerCase();
  var out = false;
  var answer = clue['answer'].toLowerCase();
  if (answer.indexOf(userAnswer) != -1)
    out = true;
  return out;
}
