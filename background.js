console.log("Extension loaded. Waiting on Caret...");

chrome.runtime.onMessageExternal.addListener(function(message, sender, sendResponse) {
    if (message.data === "sayHello") {
      console.log("Hello World!");
      console.log("Path:", message.context.path);
      console.log("Selected Text:\n", message.context.selection);
    }
});
