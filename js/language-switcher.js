function switchLangBtn() {
    let btn = document.getElementById("btn-lang")
    if (document.documentElement.lang == "en") {
        btn.innerHTML = "in English please"
        switchLangDoc()
    } else {
        btn.innerHTML = "en français s'il vous plaît"
        switchLangDoc()
    }
}

function switchLangDoc() {
    if (document.documentElement.lang == "en") {
        document.documentElement.lang = "fr"
    } else {
        document.documentElement.lang = "en"
    }
}
