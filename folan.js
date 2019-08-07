console.log("Hello from `folan.js`");
chrome.storage.sync.get('isActive', function(data) {
    console.log("EJRA");
    if(data==='true') {
        document.body.classList.add('anonymize-enabled');
    } else {
        document.body.classList.add('anonymize-disabled');
    }
});