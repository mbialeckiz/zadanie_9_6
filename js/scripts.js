var list = document.getElementById('list');
var add = document.getElementById('addElem');

function addElement() {
  
  var lis = list.getElementsByTagName('li');
  
  var element = document.createElement('li');
  element.innerText = "Item " + lis.length;
  
  list.appendChild(element);
}

add.addEventListener('click', addElement);