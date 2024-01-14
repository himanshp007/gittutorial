const mainHeading = document.querySelector('#main-heading');
mainHeading.style.textAlign = 'right';

const heading = document.querySelector('#basket-heading');
heading.style.color = 'brown';

const basketHeading = document.querySelectorAll('h2');
basketHeading[0].style.marginLeft = '30px';

const fruits = document.querySelector('.fruits');
fruits.style.backgroundColor = 'grey'
fruits.style.margin = '30px';
fruits.style.padding = '30px';
fruits.style.borderRadius = '5px';
fruits.style.listStyleType = 'none';

const fruit = document.querySelectorAll('.fruit');

for (let i =0; i < fruit.length; i++){
  fruit[i].style.backgroundColor = 'lightgrey';
  fruit[i].style.margin = '10px';
  fruit[i].style.padding = '10px';
  fruit[i].style.borderRadius = '5px';
}

const evenFruit = document.querySelectorAll('.fruit:nth-child(even)');

for (let i =0; i < evenFruit.length; i++){
  evenFruit[i].style.backgroundColor = 'brown';
  evenFruit[i].style.color = 'white';
}