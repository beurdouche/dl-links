function collect_links() {
    console.log("Extension : collecting the links...");
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
              console.log(cleanlink);
            }
            break;
          }
        }
        if (!isDuplicate) {
          myarray.push([cleantext,cleanlink]);
        }
      }
    };
    return myarray;
}

function make_table(data) {
    console.log("Extension : creating the table...");
    var table = '<table><thead><th>Name</th><th>Links</th></thead><tbody>';
    for (var i=0; i<data.length; i++) {
      table += '<tr><td>'+ data[i][0] + '</td><td>'+data[i][1]+'</td></tr>';
    };
    table += '</tbody></table>';    
    return table;
}

function run() {
    var a = collect_links();
    var t = make_table(a);
    console.log("Extension : ready for display...");
    return t;
}