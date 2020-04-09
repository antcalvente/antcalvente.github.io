// Get language depending on the page and save it to a cookie
function changeLangCookie(selectedLanguage) {
    setCookie("language", selectedLanguage);
}

function closeLangCookieDialog(currentLanguage) {
    document.getElementById("header-language-suggest").style = "visibility: hidden";
    changeLangCookie(currentLanguage);
}

function loadLanguages() {
    let languageScriptTag = document.getElementById("languageScript");
    let currentLanguage = languageScriptTag.getAttribute('data-currentLanguage');
    if (getCookie("language") !== "" && getCookie("language") !== currentLanguage) {
        let alternativeLink = languageScriptTag.getAttribute("data-alternativeLangLink");
        document.getElementById("header-language-suggest").style = "visibility: visible";
        document.getElementById("language-suggest-link").setAttribute("href", alternativeLink);
    }
}