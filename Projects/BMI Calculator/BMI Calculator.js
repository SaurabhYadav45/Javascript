
const form = document.querySelector('form');
// This test case will give empty value in height
// const height = document.querySelector('#height').value;

form.addEventListener('submit', function(e){
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  let result = document.querySelector('#results')
  const resultPara = document.querySelector('#resultPara')

  if(height == ' ' || height < 0 || isNaN(height)){
    result.innerHTML = 'Please enter a valid height'
  }
  else if(weight == ' ' || weight < 0 || isNaN(weight)){
    result.innerHTML = 'Please enter a valuid weight'
  }
  else{
    const bmi = (weight/((height*weight)/1000)).toFixed(2)
    // result.innerHTML = `BMI : ${bmi}`
    result.innerHTML = `<span> ${bmi} </span>`
  }

  // result = parseInt(result)
  // if(result < 18.6){
  //   resultPara.innerHTML = 'Underweight'
  //   console.log('Hello1')
  // }
  // else if(result > 24.9){
  //   resultPara.innerHTML = 'Overweight'
  //   console.log('Hello2')
  // }
  // else if(result >= 18.6 && result <= 24.9){
  //   resultPara.innerHTML = 'Normal range'
  //   console.log('Hello3')
  // }
})