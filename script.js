
var charSet = [];
var randomString = [];
var stringLength = 8;
var button = document.querySelector("#generate");




button.addEventListener("click", buttonClick);

function buttonClick() {
    var textArea = document.querySelector("#cherryRipe");
    randomString = [];
    var yesLowerCase = confirm("Would you like to include lower case letters? \n(Using all four of the next options leads to a stronger password)");
    var yesUpperCase = confirm("Would you like to include upper case letters?");
    var yesNumbers = confirm("Would you like to include numbers?");
    var yesSpecialCharacters = confirm("Would you like to include special characters?");




    var stringLength = 0;

    while (stringLength === 0) {
        var stringPrompt = prompt("How long do you want your password? (Must be between 8 - 128)");
        stringLength = parseInt(stringPrompt);

        if (stringLength < 8 || stringLength > 128) {
            stringLength = 0;
        } else if (stringLength >= 8 && stringLength <= 128) {
        } else {
            stringLength = 0;
        }
    }

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

    if (!yesSpecialCharacters && !yesNumbers && !yesUpperCase && !yesLowerCase) {
        alert("You need to have at least one combination of letters, numbers or characters to generate a password!");
    }



    for (var i = 0; i < stringLength; i++) {
        var randomIndex = Math.floor(Math.random() * (charSet.length));
        var adding = charSet[randomIndex];
        randomString = randomString.concat(adding);
    }

    var wholePassword = randomString.join("");
    textArea.value = wholePassword;
}


function copyFunction() {
    var copyText = document.getElementById("cherryRipe");
    copyText.select();
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);

}


