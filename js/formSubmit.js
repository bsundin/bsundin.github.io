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

    const fromHelperElement = document.getElementById("fromhelper");
    const toHelperElement = document.getElementById("tohelper");

    document.getElementById("from").addEventListener("change", initFromResize);
    document.getElementById("to").addEventListener("change", initToResize);

    function initFromResize(event) {
        console.log("initResize");
        fromHelperElement.innerHTML = event.target.querySelector(
            "option:checked"
        ).innerText;
        console.log(fromHelperElement.innerHTML);
        localStorage.setItem("fromWidth", fromHelperElement.offsetWidth);
        fromResize(fromHelperElement.offsetWidth);
    }

    function initToResize(event) {
        fromHelperElement.innerHTML = event.target.querySelector(
            "option:checked"
        ).innerText;
        localStorage.setItem("toWidth", fromHelperElement.offsetWidth);
        toResize(fromHelperElement.offsetWidth);
    }

    function fromResize(width) {
        console.log("resize run");
        const root = document.documentElement;
        root.style.setProperty("--dynamic-from-size", `${width}px`);
        console.log("width set to " + width);
    }

    function toResize(width) {
        const root = document.documentElement;
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
}

function selectToLanguage() {
    console.log("to changed");
    const to = document.getElementById("to");
    localStorage.setItem("toLang", to.value);
}

function switchLanguages() {
    var from = document.getElementById("from");
    var to = document.getElementById("to");
    var temp = from.value;
    from.value = to.value;
    to.value = temp;
    selectFromLanguage();
    selectToLanguage();
}