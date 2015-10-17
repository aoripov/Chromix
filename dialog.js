debugger;

function createDialog() {
  var body = $("body");

  //create div to block website content
  var div = $("<div>")
    .addClass("focus")
    .css({"width": "90%",
          "height": "90%",
          "background": 'rgb(255,255,255)',
          "left": "5%",
          "top": "5%", 
          "border": "5px solid black",
          "position": "fixed",
          "z-index": 9999999999
    })
    .appendTo("body");

  var question = getRandomQuestion(6115);
  var questionForm = $("<form role='form' id='questionForm'>");
  questionForm.appendTo(div);
    questionForm.css({
      "all": "initial",
      "font-size": "40px"
   });

  var questionGroup = $("<div>")
    .addClass("form-group")
    .appendTo(questionForm);

  var questionLabel = $("<label for='answer' id='question'>");

  questionLabel.html(question.question);
  questionLabel.appendTo(questionGroup);



  questionForm.appendTo(div);
}

function checkWebsite(){
  var regExp = new RegExp("engadget");

  if(regExp.test(document.URL)) { //url matches

  	createDialog();

  }
};

var toggled;
console.log("hello134411234");
chrome.storage.local.get(function(item){
  console.log(item); 
  toggled = item.toggled;

  if( toggled ) {  //check if extension turned on
    checkWebsite();
  } else {
    console.log("button disabled");
}

});// toggled = item["toggled"];});




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
  } //what happens if it doesn't work?
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
