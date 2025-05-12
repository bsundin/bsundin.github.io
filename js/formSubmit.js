var fromLang = "auto";
var toLang = "en";
const langCodeArray = ["sq", "ar", "az", "eu", "bn", "bg", "ca", "zt", "zh", "cs", "da", "nl", "en", "eo", "et", "fi", "fr", "gl", "de", "el", "he", "hi", "hu", "id", "ga", "it", "ja", "ko", "lv", "lt", "ms", "nb", "fa", "pl", "pt", "ro", "ru", "sk", "sl", "es", "sv", "tl", "th", "tr", "uk", "ur"];
const langNameArray = ["Albanian", "Arabic", "Azerbaijani", "Basque", "Bengali", "Bulgarian", "Catalan", "Chinese (Traditional)", "Chinese (Simplified)", "Czech", "Danish", "Dutch", "English", "Esperanto", "Estonian", "Finnish", "French", "Galician", "German", "Greek", "Hebrew", "Hindi", "Hungarian", "Indonesian", "Irish", "Italian", "Japanese", "Korean", "Latvian", "Lithuanian", "Malay", "Norwegian", "Persian", "Polish", "Portuguese", "Romanian", "Russian", "Slovak", "Slovenian", "Spanish", "Swedish", "Tagalog", "Thai", "Turkish", "Ukrainian", "Urdu"];

function loadDropdowns() {
    var from = document.getElementById("from");
    var to = document.getElementById("to");
    const fromHelperElement = document.getElementById("fromhelper");
    const toHelperElement = document.getElementById("tohelper");

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
    } else {
        initFromResize();
    }
    if (localStorage.getItem("toWidth") != null) {
        const root = document.documentElement;
        const width = localStorage.getItem("toWidth");
        root.style.setProperty("--dynamic-to-size", `${width}px`);
    } else {
        initToResize();
    }

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
        toHelperElement.innerHTML = event.target.querySelector(
            "option:checked"
        ).innerText;
        localStorage.setItem("toWidth", toHelperElement.offsetWidth);
        toResize(toHelperElement.offsetWidth);
    }

    function initFromResize() {
        console.log("initResize");
        fromHelperElement.innerHTML = from.querySelector(
            "option:checked"
        ).innerText;
        console.log(fromHelperElement.innerHTML);
        localStorage.setItem("fromWidth", fromHelperElement.offsetWidth);
        fromResize(fromHelperElement.offsetWidth);
    }

    function initToResize() {
        toHelperElement.innerHTML = to.querySelector(
            "option:checked"
        ).innerText;
        localStorage.setItem("toWidth", toHelperElement.offsetWidth);
        toResize(toHelperElement.offsetWidth);
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

    if (from.value == "auto") {
        document.getElementById("switchLanguages").style.display = 'none';
    } else {
        document.getElementById("switchLanguages").style.display = 'block';
    }

}

async function submitTranslation() {
    console.log("test");
    var input = document.getElementById("input").value;
    var output = document.getElementById("output");
    var from = document.getElementById("from").value;
    var to = document.getElementById("to").value;
    // output.innerHTML = input;
    console.log(input);
    if (input != "") {
        document.getElementById("lds-ellipsis").style.display = 'block';
        output.innerHTML = "Translating...";
        const res = await fetch("https://translateapi.thesundinfamily.xyz/translate", {
            method: "POST",
            body: JSON.stringify({
                q: input,
                source: from,
                target: to,
                format: "text",
                alternatives: 0,
                api_key: ""
            }),
            headers: { "Content-Type": "application/json" }
        });
        
        const jsonObject = await res.json();
        console.log(jsonObject);
        console.log(jsonObject.translatedText);
        output.innerHTML = jsonObject.translatedText;
        document.getElementById("lds-ellipsis").style.display = 'none';
    } else {
        console.log("no input");
    }
}

function selectFromLanguage() {
    console.log("from changed");
    const from = document.getElementById("from");
    localStorage.setItem("fromLang", from.value);
    if (from.value == "auto") {
        document.getElementById("switchLanguages").style.display = 'none';
    } else {
        document.getElementById("switchLanguages").style.display = 'block';
    }
}

function selectToLanguage() {
    console.log("to changed");
    const to = document.getElementById("to");
    localStorage.setItem("toLang", to.value);
}

function switchLanguages() {
    var from = document.getElementById("from");
    var to = document.getElementById("to");

    const fromHelperElement = document.getElementById("fromhelper");
    const toHelperElement = document.getElementById("tohelper");

    function initFromResize() {
        console.log("initResize");
        fromHelperElement.innerHTML = from.querySelector(
            "option:checked"
        ).innerText;
        console.log(fromHelperElement.innerHTML);
        localStorage.setItem("fromWidth", fromHelperElement.offsetWidth);
        fromResize(fromHelperElement.offsetWidth);
    }

    function initToResize() {
        toHelperElement.innerHTML = to.querySelector(
            "option:checked"
        ).innerText;
        localStorage.setItem("toWidth", toHelperElement.offsetWidth);
        toResize(toHelperElement.offsetWidth);
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

    var temp = from.value;
    from.value = to.value;
    to.value = temp;
    selectFromLanguage();
    selectToLanguage();
    initFromResize();
    initToResize();
}

function updateCount() {
    var input = document.getElementById("input").value;
    var output = document.getElementById("output");
    if (input == "") {
        output.innerHTML = "";
    }
    var inputCount = document.getElementById("charactercount");
    inputCount.innerHTML = input.length + " / 500";
}

function clearInput() {
    var input = document.getElementById("input");
    var output = document.getElementById("output");
    input.value = "";
    output.innerHTML = "";
}