console.log('content script on app domain loaded');
chrome.runtime.onMessage.addListener(
  function(message, sender, sendResponse) {
    console.log('app domain content script: received message:', message, 'from sender:', sender);

    // append text to local storage list
    const textList = JSON.parse(localStorage.getItem('textList')) || [];
    textList.push(message);
    localStorage.setItem('textList', JSON.stringify(textList));
    console.log('text list is now:', textList);
  }
);
