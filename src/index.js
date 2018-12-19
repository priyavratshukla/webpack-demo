import _ from 'lodash';
import './style.css';
import Icon from './icon.png';
import Data from './data.xml';
import jsonData from './data.json';
import printMe from './print.js';
function component() {
  let element = document.createElement('div');
  var btn = document.createElement('button');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');
  

  // Add the image to our existing div.
	var myIcon = new Image();
   	myIcon.src = Icon;

	element.appendChild(myIcon);

	console.log(Data);
	console.log(jsonData);

	btn.innerHTML = 'Click me and check the console!';
	btn.onclick = printMe;
	element.appendChild(btn);

  return element;
}

document.body.appendChild(component());