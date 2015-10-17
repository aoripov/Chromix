var defaultURL = "www.facebook.com";
var NS4 = (navigator.appName == "Netscape" && parseInt(navigator.appVersion) < 5);

function addOption(theSel, theText, theValue)
{
  var newOpt = new Option(theText, theValue);
  var selLength = theSel.length;
  theSel.options[selLength] = newOpt;
}

function deleteOption(theSel, theIndex)
{ 
  var selLength = theSel.length;
  if(selLength>0)
  {
    theSel.options[theIndex] = null;
  }
}

function moveOptions(theSelFrom, theSelTo)
{
  
  var selLength = theSelFrom.length;
  var selectedText = new Array();
  var selectedValues = new Array();
  var selectedCount = 0;
  
  var i;
  
  // Find the selected Options in reverse order
  // and delete them from the 'from' Select.
  for(i=selLength-1; i>=0; i--)
  {
    if(theSelFrom.options[i].selected)
    {
      selectedText[selectedCount] = theSelFrom.options[i].text;
      selectedValues[selectedCount] = theSelFrom.options[i].value;
      deleteOption(theSelFrom, i);
      selectedCount++;
    }
  }
  
  // Add the selected text/values in reverse order.
  // This will add the Options to the 'to' Select
  // in the same order as they were in the 'from' Select.
  for(i=selectedCount-1; i>=0; i--)
  {
    addOption(theSelTo, selectedText[i], selectedValues[i]);
  }
  
  if(NS4) history.go(0);
}

function loadOptions() {
    var e = document.getElementById("urls");
    var strUser = e.options[e.selectedIndex].text;
    /*if (typeof(Storage) !== "undefined") {
      document.getElementById('urls').innerHTML = localStorage.getItem('urls');
    } else {
      document.getElementById('urls').innerHTML = "Sorry, your browser does not support Web Storage...";
    }
    //var currentURl = localStorage["urls"];
    // valid colors are red, blue, green and yellow
    if (currentURL == undefined || (currentURL != "www.facebook.com" && currentURL != "www.exchange.jacobs-university.de" && currentURL != "www.twitter.com" && currentURL != "www.youtube.com")) {
        currentURL = defaultURL;
    }
    var select = document.getElementById("urls");
    for (var i = 0; i < select.children.length; i++) {
        var child = select.children[i];
            if (child.value == currentURL) {
            child.selected = "true";
            break;
        }
    }*/
}
function saveOptions() {
    var select = document.getElementById('urls');
    var URL = select.children[select.selectedIndex].value;
    localStorage.setItem('urls', URL);
}
function eraseOptions() {
    localStorage.removeItem('urls');
    location.reload();
}



