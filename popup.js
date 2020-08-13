'use strict';
let codeUntranslate = document.getElementById('codeUntranslate');

codeUntranslate.onclick = function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
      tabs[0].id,
      {file: 'untrans.js'}
    )
  });
};
