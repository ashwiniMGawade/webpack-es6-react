//import React from 'react';
import React from 'react';
import ReactDOM from 'react-dom';

var logger = require('./logger');;

var myList = (
<ul>
    <li>test13</li>
    <li>test2</li>
    <li>test3</li>
    </ul>
);

var materials = [
  "Hydrogen",
  "Helium",
  "Lithium",
  "Beryllium"
];

var materialsLength1 = materials.map(function(material){ 
 return material.length 
});

console.log(materialsLength1);

ReactDOM.render(myList, document.getElementById('app'));

const elements = document.querySelectorAll('li');
const elementsArray = Array.from(elements);
console.log(elementsArray);
let html = elementsArray.map(
    (e) => ReactDOM.render(<span>{e.textContent}</span>, document.getElementById('app')));
