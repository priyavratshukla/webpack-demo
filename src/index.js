import _ from 'lodash';
import './style.css';
import Icon from './icon.png';
import Data from './data.xml';
import jsonData from './data.json';
import printMe from './print.js';
import { cube } from './math.js';

if (process.env.NODE_ENV !== 'production') {
	console.log('Looks like we are in development mode!');
}

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

function component_tree_shaking(){
	var element = document.createElement('pre');
	element.innerHTML = [
		'Hello webpack!',
		'4 cubed is equal to ' + cube(4)
	].join('.\n\n');
	return element;
}

//document.body.appendChild(component());

let element = component(); // Store the element to re-render on print.js changes
document.body.appendChild(element);
let element_ts = component_tree_shaking();
document.body.appendChild(element_ts);

if(module.hot){
	module.hot.accept('./print.js', function(){
		console.log('Accepting the updated printMe module!');
		//printMe();
		document.body.removeChild(element);
		element = component(); // Re-render the "component" to update the click handler
		document.body.appendChild(element);
	})
}