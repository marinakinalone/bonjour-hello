function switchLangBtn() {
    let btn = document.getElementById("btn-lang")
    if (document.documentElement.lang == "en") {
        btn.innerHTML = "in English please"
        switchLangDoc()
        toggleLangContent()

    } else {
        btn.innerHTML = "en français s'il vous plaît"
        switchLangDoc()
        toggleLangContent()
    }
}

function switchLangDoc() {
    if (document.documentElement.lang == "en") {
        document.documentElement.lang = "fr"
    } else {
        document.documentElement.lang = "en"
    }
}

// function below not working

function toggleLangContent() {
    let englishContent = document.getElementsByClassName("en");
    let frenchContent = document.getElementsByClassName("fr");
    if (document.documentElement.lang == "en") {
        for (let i = 0; i < englishContent.length; i++) {
            frenchContent[i].style.display = "none"
            englishContent[i].style.display = "block"
        }
    } 
    if (document.documentElement.lang == "fr") {
        for (let j = 0; j < frenchContent.length; j++) {
            frenchContent[j].style.display = "block"
            englishContent[j].style.display = "none"
        }
    }

}

