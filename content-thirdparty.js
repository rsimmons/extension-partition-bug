// This is a content script for the extension that runs on pages we want to snip text from

// Create a button element
const button = document.createElement('button');

// Set button styles
button.style.position = 'fixed';
button.style.top = '10px';
button.style.right = '10px';
button.style.zIndex = '9999';
button.style.background = 'white';
button.style.padding = '5px';
button.style.border = '1px solid black';

// Add text to button
button.textContent = 'Snip';

// Append button to body
document.body.appendChild(button);

// Add event listener to button
button.addEventListener('click', () => {
  // Get selected text
  const selectedText = window.getSelection().toString();
  console.log('third party content script: selected text was:', selectedText);
  if (selectedText) {
    (async () => {
      const resp = await chrome.runtime.sendMessage(selectedText);
    })();
  }
});

// Create hidden iframe
const iframe = document.createElement('iframe');
iframe.style.display = 'none';
iframe.src = chrome.runtime.getURL('iframe-to-app.html');
document.body.appendChild(iframe);
