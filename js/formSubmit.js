var fromLang = "auto";
var toLang = "en";
const langCodeArray = ["sq", "ar", "az", "eu", "bn", "bg", "ca", "zt", "zh", "cs", "da", "nl", "en", "eo", "et", "fi", "fr", "gl", "de", "el", "he", "hi", "hu", "id", "ga", "it", "ja", "ko", "lv", "lt", "ms", "nb", "fa", "pl", "pt", "ro", "ru", "sk", "sl", "es", "sv", "tl", "th", "tr", "uk", "ur"];
const langNameArray = ["Albanian", "Arabic", "Azerbaijani", "Basque", "Bengali", "Bulgarian", "Catalan", "Chinese (Traditional)", "Chinese (Simplified)", "Czech", "Danish", "Dutch", "English", "Esperanto", "Estonian", "Finnish", "French", "Galician", "German", "Greek", "Hebrew", "Hindi", "Hungarian", "Indonesian", "Irish", "Italian", "Japanese", "Korean", "Latvian", "Lithuanian", "Malay", "Norwegian", "Persian", "Polish", "Portuguese", "Romanian", "Russian", "Slovak", "Slovenian", "Spanish", "Swedish", "Tagalog", "Thai", "Turkish", "Ukrainian", "Urdu"];

function loadDropdowns() {
    var from = document.getElementById("from");
    var to = document.getElementById("to");
    for (var i = 0; i < langCodeArray.length; i++) {
        var fromOption = document.createElement("option");
        fromOption.value = langCodeArray[i];
        fromOption.text = langNameArray[i];
        from.add(fromOption);
        var toOption = document.createElement("option");
        toOption.value = langCodeArray[i];
        toOption.text = langNameArray[i];
        to.add(toOption);
    }
    console.log("dropdowns loaded");
}

function submitTranslation() {
    console.log("test");
    var input = document.getElementById("input").value;
    var output = document.getElementById("output");
    output.innerHTML = input;
    console.log(input);
}
// function selectFromLanguage() {
//     console.log("from changed");
//     var from = document.getElementById("from");
//     var to = document.getElementById("to");
//     if (from.value != "auto") {
//         to.add(fromLang);
//         to.remove(from.id);
//     }
// }

// function selectToLanguage() {
//     console.log("to changed");
// }