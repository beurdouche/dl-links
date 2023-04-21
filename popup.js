document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("execute-js").addEventListener("click", function() {
    browser.tabs.query({active: true, currentWindow: true}).then((tabs) => {
      let tab = tabs[0];

      // Inject greetings.js into the page
      browser.tabs.executeScript(tab.id, {
        file: "available.js"
      }).then(() => {
        // Execute code in the context of the page
        browser.tabs.executeScript(tab.id, {
          code: 'console.log("Extension : starting execution...");'
        });
        browser.tabs.executeScript(tab.id, {
          code: 'run();'
        });
        browser.tabs.executeScript(tab.id, {
          code: 'console.log("Extension : Done...");'
        });
      });
    });
  });
});
