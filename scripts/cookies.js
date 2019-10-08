function setCookie(cookieName, cookieValue) {
    let expiration = new Date();
    expiration.setFullYear(expiration.getFullYear() + 1);
    document.cookie = cookieName + "=" + cookieValue + ";expires=" + expiration + ";path=/";
}

function getCookie(cookieName) {
    let name = cookieName + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}