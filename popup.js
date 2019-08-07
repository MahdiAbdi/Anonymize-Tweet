let changeColor = document.getElementById('changeColor');
let tweets = document.querySelectorAll("[data-testid='tweet']");



// document.body.classList.add('enabled');

changeColor.onclick = function(element) {
    let color = element.target.value;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            {code: `console.log(document.querySelectorAll("[data-testid=\'tweet\']"));`});
    });
};