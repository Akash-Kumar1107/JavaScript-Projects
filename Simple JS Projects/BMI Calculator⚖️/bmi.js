const form = document.querySelector('form')
//this usecase will give you empty
//const height = parseInt(document.querySelector('height').value ) // when event come select values
 
form.addEventListener('submit',function (e) {
    e.preventDefault() // prevent value to submit

    const height = parseInt(document.querySelector('#height').value ) // when event come select values
    const weight = parseInt(document.querySelector('#weight').value ) // when event come select values
    const results = document.querySelector('#results') // when event come select values
    
    if(height === '' || height < 0 || isNaN(height)){    //giving a check if condition is true
        results.innerHTML = `Please give a valid height ${height}` 
    } 
    else if(weight === '' || weight < 0 || isNaN(weight)){    //giving a check if condition is true
        results.innerHTML = `Please give a valid weight ${weight}` 
    } 
    else{
        const bmi = (weight / ((height * height)/ 10000)).toFixed(2)  //tofixed-> get only 2 values after .
        
        //show the results
        results.innerHTML = `Your BMI is ${bmi}`
        printBmi(parseFloat(bmi),document.querySelector('#weight-guide'))
    }
    function printBmi(bmi) {
        const bmiCategory = document.querySelector('#weight-guide')

        if(`${bmi}`<= 18.6){
            bmiCategory.innerHTML = "Underweight"
        }
        else if(`${bmi}`>= 18.6 && `${bmi}`<=24.9){
            bmiCategory.innerHTML = "Normal"
        }
        else if(`${bmi}`>= 24.9){
            bmiCategory.innerHTML = "overweight"
        }
    }
})



