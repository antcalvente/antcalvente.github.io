// Get language depending on the page and save it to a cookie
function changeLangCookie(selectedLanguage) {
    setCookie("language", selectedLanguage);
}

window.onload = function () {
    let languageScriptTag = document.getElementById("languageScript");
    let currentLanguage = languageScriptTag.getAttribute('data-currentLanguage');
    if (getCookie("language") !== currentLanguage) {
        console.log("Probably in the wrong page");
        let alternativeLink = languageScriptTag.getAttribute("data-alternativeLangLink");
        // TODO display here a small popup with the recommendation page
    }
}