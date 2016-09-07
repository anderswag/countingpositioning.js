function createKeys(str){
  var obj = {};
  //var noSpaces = str.split(" ").join("");
  for (var i = 0; i < str.length; i++){
    if(obj[str[i]] === undefined){
      obj[str[i]] = [];
      obj[str[i]].push(i);
    } else {
      obj[str[i]].push(i);
    }
  } delete obj[" "];

  return obj;
}
var string = "Lighthouse in the house";
console.log(createKeys(string));