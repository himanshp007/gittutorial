const fruits= document.getElementsByTagName('li');

for (let i = 0; i<fruits.length; i++){
  fruits[i].style.fontStyle = 'italic';
}

fruits[4].style.color = 'blue'