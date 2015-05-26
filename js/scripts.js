var stringSplitter = (function(string) {
  var smooshString = string.replace(/\s/g,"");
  smooshString = smooshString.toLowerCase();

  var columnNumber = Math.sqrt(smooshString.length);
  var columnNumber = Math.floor(columnNumber);
  var rowNumber = smooshString.length / columnNumber;
  var rowNumber = Math.floor(rowNumber) + 1;
  var newString = "";

    for (var i = 0; i <= rowNumber ; i += 1 ) {

        newString = newString.concat(smooshString[columnNumber * i]);
    };




  return newString
});
