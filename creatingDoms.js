// Write your code below:

const firstDiv = document.querySelector('div');
const subHead = document.createElement('h3');
const subHeadText = document.createTextNode('Buy high quality organic fruits online');
subHead.appendChild(subHeadText);

subHead.className = 'sub-heading';
firstDiv.appendChild(subHead);

const subHeading = document.querySelector('.sub-heading');
subHeading.style.fontStyle = 'italic';


const div = document.querySelectorAll('div');
const secondDiv = div[1];

const para = document.createElement('P');
const paraText = document.createTextNode('Total fruits: 4');
para.appendChild(paraText);

para.id = 'fruits-total';


const fruitItems = document.querySelector('.fruits');
secondDiv.insertBefore(para, fruitItems);




