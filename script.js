


function GuessNumber(){
    let inputText = document.getElementById("input").value;
    let result = document.getElementById("result");
    let random = Math.floor(Math.random() * 10);
    console.log(random);

    if(inputText == random){
        result.innerHTML = `The Number is Matched<br/>Input Number is: ${inputText}<br/>Random Number is: ${random}`;
    }
    else if(inputText != random && inputText > 10){
        result.innerHTML = `Please try Numbers Below the 10`;
    }
    else{
        result.innerHTML = `The Number is Not Matched`;
    }
    
}

