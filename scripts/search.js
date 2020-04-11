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
        const result = listOfResults[i];
        const titleCategories = result.getAttribute("data-title").concat(result.getAttribute("data-categories"));
        if (!titleCategories.toLowerCase().includes(inputElement.value.toLowerCase())) {
            result.style.display = "none";
        } else {
            result.style.display = "block";
        }
    }
}

function searchOutsideListener(event) {
    const searchInput = document.getElementById(searchBarId);
    const resultsElement = searchInput.getElementsByClassName(resultsClass)[0];
    if (!searchInput.contains(event.target) && !resultsElement.contains(event.target) && resultsElement.style.display === "block") {
        resultsElement.style.display = 'none';
    }
}