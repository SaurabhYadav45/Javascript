const body = document.querySelector('body');
const buttons = document.querySelectorAll('.button')

buttons.forEach(function(button){
  button.addEventListener('click', function(e){
    if(e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id
    }

    if(e.target.id === 'white'){
      body.style.backgroundColor = e.target.id
    }

    if(e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id
    }

    if(e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id
    }
  });
});

// const body = document.querySelector('body')
// const greyC = document.querySelector('#grey').addEventListener('click', function(e){
//   body.style.backgroundColor = e.target.id;
// })

// const blue = document.querySelector('#blue').addEventListener('click', function(e){
//   body.style.backgroundColor = e.target.id;
// })

// const white = document.querySelector('#white').addEventListener('click', function(e){
//   body.style.backgroundColor = e.target.id;
// })

// const yellow = document.querySelector('#yellow').addEventListener('click', function(e){
//   body.style.backgroundColor = e.target.id;
// })

