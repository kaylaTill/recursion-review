// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  var body=document.body
  var results=[]
  function getClassElements(element){
    if(element.classList && element.classList.contains(className)){results.push(element)}
    if(element.childNodes){element.childNodes.forEach(child=>getClassElements(child))}
  }
  getClassElements(body)
  return results;
  // your code here
};
