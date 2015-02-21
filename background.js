console.log("Extension loaded. Waiting on Caret...");

chrome.runtime.onMessageExternal.addListener(function(message, sender, sendResponse) {
    if (message.data === "sayHello") {
      console.log("Hello World!");
      alert("Hello World!");
    }
});