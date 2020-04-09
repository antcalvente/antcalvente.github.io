const searchBarId = "searchBar";
const resultsClass = "results";

function searchOnKeyUp(inputElement) {
    const resultsElement = document.getElementById(searchBarId).getElementsByClassName(resultsClass)[0];
    if (inputElement.value !== "") {
        resultsElement.style.display = "block";
    } else {
        resultsElement.style.display = "none";
    }

    const listOfResults = resultsElement.getElementsByTagName("li");
    for (let i = 0; i < listOfResults.length; i++) {
        let result = listOfResults[i];
        if (!result.getAttribute("data-title").toLowerCase().includes(inputValue.toLowerCase())) {
            result.style.display = "none";
        } else {
            result.style.display = "block";
        }
    }
}

function searchOutsideListener(event) {
    const resultsElement = document.getElementById(searchBarId).getElementsByClassName(resultsClass)[0];
    if (!resultsElement.contains(event.target) && resultsElement.style.display === "block") {
        resultsElement.style.display = 'none';
    }
}