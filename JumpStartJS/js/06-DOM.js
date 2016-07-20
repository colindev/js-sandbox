// create new element
var myDiv = document.createElement("div");
// add the new element into specify place
document.contact.appendChild(myDiv);
// add value and content [attribute], [attributeContent]
myDiv.setAttribute("name", "foo");

var myLink = document.createElement("a");
// create new attribute
href = document.createAttribute("href");
// add node value
href.nodeValue = "http://sitepoint.com";
// set node attribute
myLink.setAttributeNode(href);
// create node text
linkText = document.createTextNode("Sitepoint(JS)");
// add and set attribute
myLink.setAttribute("target", "_blank");
// set node into element
myLink.appendChild(linkText);
document.contact.appendChild(myLink);

// create list
var list = document.createElement("ul");
var listItems = [
  "Travel the wolrd",
  "Be an international volunteer",
  "Read 100 books",
  "Keep contacts with friends",
  "Be the change",
  "Don't lose myself"
];
for (var i = 0; i < listItems.length; i++ ) {
  var itemNum = "item" + i;
  itemNum = document.createElement("li");
  itemNum.appendChild(document.createTextNode(listItems[i]));
  list.appendChild(itemNum);
}
document.contact.appendChild(list);

// get HTML element
var hello = document.getElementById("greeting");
// change text content
hello.textContent = "Good morning!";
// change style
hello.style.color = "#6c6c6c";
hello.style.padding = "15px";
hello.style.background = "#f5f5f5";
hello.style.width = "200px";
hello.style.margin = "0 auto";
hello.style.border = "solid 3px #CCC";
