var defaultURL = "www.facebook.com";
function loadOptions() {
    if (typeof(Storage) !== "undefined") {
      document.getElementById("urls").innerHTML = localStorage.getItem("urls");
    } else {
      document.getElementById("urls").innerHTML = "Sorry, your browser does not support Web Storage...";
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
    }
}
function saveOptions() {
    var select = document.getElementById("urls");
    var URL = select.children[select.selectedIndex].value;
    localStorage.setItem("urls", URL);
}
function eraseOptions() {
    localStorage.removeItem("urls");
    location.reload();
}

