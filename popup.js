var x = document.querySelectorAll("a");
var myarray = []
for (var i=0; i<x.length; i++){
  var nametext = x[i].textContent;
  var cleantext = nametext.replace(/\s+/g, ' ').trim();
  var cleanlink = x[i].href;
  if (x[i].href) {
    var isDuplicate = false;
    for (var j = 0; j < myarray.length; j++) {
      if (myarray[j][1] === cleanlink) {
        isDuplicate = true;
        // Replace existing entry if cleantext is not null
        if (cleantext) {
          myarray[j][0] = cleantext;
        }
        break;
      }
    }
    if (!isDuplicate) {
      myarray.push([cleantext,cleanlink]);
    }
  }
};

function make_table(data) {
    var table = '<table><thead><th>Name</th><th>Links</th></thead><tbody>';
    for (var i=0; i<data.length; i++) {
      table += '<tr><td>'+ data[i][0] + '</td><td>'+data[i][1]+'</td></tr>';
    };
    table += '</tbody></table>';

    var w = window.open("");
    w.document.write(table); 
}

function test() {
    var w = window.open("");
    w.document.write("Hello World!");   
}

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("execute-js").addEventListener("click", function() {
    browser.tabs.query({active: true, currentWindow: true}, function(tabs) {
      browser.tabs.sendMessage(tabs[0].id, {action: "executeCode", code: "alert('Hello !');"});
    });
  });
});

// document.addEventListener("DOMContentLoaded", function() {
//   document.getElementById("execute-js").addEventListener("click", function() {
//     browser.tabs.create({ url: "https://www.example.com" });
//   });
// });

