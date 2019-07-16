// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // edge cases: undefined, function, null
  // base cases: number, string, boolean
  // arrays: iterate through every element of the array using forEach and recursion function
  // objects: get object keys/ stringify each key-value pairs
if(obj===null){
  return "null";
}
if (typeof(obj)==="string") {
  return `"${obj}"`;
}
if (typeof(obj)==="function" ||typeof(obj)==="undefined"){
  return "";
}

if(Array.isArray(obj)){
  let arr=[]
  for (let i=0; i<obj.length; i++){
    arr.push(stringifyJSON(obj[i]))
  }
  return `[${arr.toString()}]`

}
if(typeof(obj)==="object"){
  var newObj = "";
  var keys = Object.keys(obj);

  keys.forEach(function(element){
    if (typeof(element)==="undefined"||typeof(element)==="function"||typeof(obj[element])==="undefined"||typeof(obj[element])==="function"){
      return "";
    }else newObj += `${stringifyJSON(element)}:${stringifyJSON(obj[element])},`;
  })
  return `{${newObj.slice(0,newObj.length-1)}}`;
}
else return obj.toString()

  // your code goes here
};