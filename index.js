const from = document.getElementById("from");
const to= document.getElementById("to");
const inputNumber = document.getElementById("input-number");
const resultBox=document.getElementById("result-box");

document.getElementById("convert").addEventListener("click" ,()=>{

    //grab from
    let fromValue= from.value;

    //grab to

    let toValue= to.value;

    let inputValue = inputNumber.value;

    let result= convertBase(fromValue, toValue ,inputValue);

    // show the result in result box

    resultBox.innerText=result;

})


function convertBase(fromBase , toBase , num){
    let d= parseInt(num, fromBase);// converting num to base 10
    let res= d.toString(toBase);
    return  res;


}

document.getElementById("swap").addEventListener("click" ,()=>{
    let temp =from.value;
    from.value=to.value;
    to.value=temp;
})

// document.write("hello");