chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({isActive: 'true'}, function() {
        console.log('ExtensionActivation: TRUE');
    });
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({
                pageUrl: {hostEquals: 'twitter.com'}, //Twitter.com
            })
            ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
});