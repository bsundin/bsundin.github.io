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
    if (localStorage.getItem("fromLang") != null) {
        from.value = localStorage.getItem("fromLang");
    }
    if (localStorage.getItem("toLang") != null) {
        to.value = localStorage.getItem("toLang");
    }
    if (localStorage.getItem("fromWidth") != null) {
        const root = document.documentElement;
        const width = localStorage.getItem("fromWidth");
        root.style.setProperty("--dynamic-from-size", `${width}px`);
    }
    if (localStorage.getItem("toWidth") != null) {
        const root = document.documentElement;
        const width = localStorage.getItem("toWidth");
        root.style.setProperty("--dynamic-to-size", `${width}px`);
    }
}

function submitTranslation() {
    console.log("test");
    var input = document.getElementById("input").value;
    var output = document.getElementById("output");
    output.innerHTML = input;
    console.log(input);
}
function selectFromLanguage() {
    console.log("from changed");
    const from = document.getElementById("from");
    localStorage.setItem("fromLang", from.value);
    console.log("fromLang set to " + from.value);
    const helperElement = document.getElementById("fromhelper");

    from.addEventListener("change", initResize);

    function initResize(event) {
        console.log("initResize");
        helperElement.innerHTML = event.target.querySelector(
            "option:checked"
        ).innerText;
        console.log(helperElement.innerHTML);
        localStorage.setItem("fromWidth", helperElement.offsetWidth);
        resize(helperElement.offsetWidth);
    }

    function resize(width) {
        console.log("resize run");
        const root = document.documentElement;
        root.style.setProperty("--dynamic-from-size", `${width}px`);
        console.log("width set to " + width);
    }
}

function selectToLanguage() {
    console.log("to changed");
    const to = document.getElementById("to");
    localStorage.setItem("toLang", to.value);
    const helperElement = document.getElementById("tohelper");

    to.addEventListener("change", initResize);

    function initResize(event) {
        helperElement.innerHTML = event.target.querySelector(
            "option:checked"
        ).innerText;
        localStorage.setItem("toWidth", helperElement.offsetWidth);
        resize(helperElement.offsetWidth);
    }

    function resize(width) {
        const root = document.documentElement;
        root.style.setProperty("--dynamic-to-size", `${width}px`);
    }
}