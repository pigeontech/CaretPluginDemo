# CaretPluginDemo
A simple Hello World example of a Caret plugin.

## Load Into Chrome
The easiest way to add the extension into Chrome is to use the [Chrome Dev Editor](https://chrome.google.com/webstore/detail/chrome-dev-editor-develop/pnoffddplpippgcfjdhbmhkofpnaalpg) to open the project, then just click the run button (looks like a play button). Alternatively, go into `chrome://extensions/`, enable Developer Mode with the checkbox, then click the "Load unpacked extension..." button.

## Caret Setup
You also need to make changes to two JSON files within Caret's settings.

* Under Settings > External Commands, a file named api.json will open. Add the following code. A "sampleMessage" example is already there. If you leave it there instead of overwriting, be sure to add a comma for proper JSON formatting. Also, after loading the extension into Chrome, you may get a different id. The id is listed on the `chrome://extensions/` page. The id identifies the extension, which Caret needs to send it a message.
```
"pluginDemo": {
  "id": "kcgikkicgjgimeecgcaikofclidgknnl",
  "sendEditorContext": true,
  "message": {
    "data": "sayHello"
  }
}
```

* Under Settings > Menus, a file named menus.json will open. You need to add a menu item. Clicking the menu item is what will trigger Caret to call the plugin. You can place it anywhere, but for this example, go under `menuTools`, right after the `menuWordCount` item. This will place it under the Tools menu as the last item. Also, don't forget the comma add the end of the previous item, which was `menuWordCount`.
```
{ "label": "Plugin Demo", "command": "api:execute", "argument": "pluginDemo" }
```

## Images
Here are a couple images that will help. They show how to find the console link on the extension pages, and what it should look like.

![Find Console](http://i.imgur.com/BkkIXGI.png)

![Find Console](http://i.imgur.com/0WFnAOf.png)
