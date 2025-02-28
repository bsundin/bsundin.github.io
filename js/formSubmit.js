var fromLang = "auto";
var toLang = "en";

function submitTranslation() {
    console.log("test");
    var input = document.getElementById("input").value;
    var output = document.getElementById("output");
    document.getElementById("output").innerHTML = input;
    console.log(input);
}
function selectFromLanguage() {
    console.log("from changed");
    var from = document.getElementById("from");
    var to = document.getElementById("to");
    if (from.value != "auto") {
        to.add(fromLang);
        to.remove(from.id);
    }
}

function selectToLanguage() {
    console.log("to changed");
}