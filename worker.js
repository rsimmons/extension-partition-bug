chrome.runtime.onMessage.addListener(
  function(message, sender, sendResponse) {
    console.log('service worker: received message:', message);

    // forward the message to active tab, to be received by content script on the app domain
    (async () => {
      const [tab] = await chrome.tabs.query({active: true, lastFocusedWindow: true});
      const response = await chrome.tabs.sendMessage(tab.id, message);
    })();
  }
);
