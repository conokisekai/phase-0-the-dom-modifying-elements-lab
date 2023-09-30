// Write your code here!
// Remove the DOM node
const main = document.querySelector('main');
main.remove();

// Create a newHeader
const newHeader = document.createElement('h1');
newHeader.id = 'victory';

newHeader.innerHTML = "YOUR-NAME is the champion";
