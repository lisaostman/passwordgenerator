
var charSet = [];
var randomString = [];
var stringLength = 8;
var button = document.querySelector("#generate");




button.addEventListener("click", buttonClick);

function buttonClick() {
    var yesLowerCase = confirm("Would you like to include lower case letters?");
    var yesUpperCase = confirm("Would you like to include upper case letters?");
    var yesNumbers = confirm("Would you like to include numbers?");
    var yesSpecialCharacters = confirm("Would you like to include special characters?")

    if (yesLowerCase) {
        charSet = charSet.concat(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]);
        //console.log(charSet);
    }

    if (yesUpperCase) {
        charSet = charSet.concat(["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]);
        //console.log(charSet);
    }

    if (yesNumbers) {
        charSet = charSet.concat([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
        //console.log(charSet);
    }

    if (yesSpecialCharacters) {
        charSet = charSet.concat(["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "|", "}", "~"]);
        //console.log(charSet);
    }

    for (var i = 0; i < stringLength; i++) {
        var randomIndex = Math.floor(Math.random() * (charSet.length));
        var adding = charSet[randomIndex];
        randomString = randomString.concat(adding);
    }

    var wholePassword = randomString.join("");
    var textArea = document.querySelector("#cherryRipe");
    textArea.value = wholePassword;
}


function copyFunction() {
    var copyText = document.getElementById("cherryRipe");
    copyText.select();
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);

}


