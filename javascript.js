
const text = document.getElementsByClassName("text")[0];
const smalltext = document.getElementsByClassName("afterResult")[0];

const inputs = document.querySelectorAll('.nb7');

let number=0;
let firstnb=0;
let secondnb=0;
let operatorChoosen=null;


inputs.forEach(input => {
  input.addEventListener('click', function() {
    
        if(operatorChoosen==null){
            if(this.value != "+" && this.value != "-" && this.value !="/" && this.value !="*" ){
                firstnb=firstnb+this.value;
            }
            else if(this.value != "="){
                operatorChoosen=this.value;
            }
        }else{
            if(this.value != "+" && this.value != "-" && this.value !="/" && this.value !="*" ){
                secondnb=secondnb+this.value;
            } 
        }
        if(this.value=="="){
            firstnb=parseFloat(firstnb);
            secondnb=parseFloat(secondnb);
            console.log(firstnb + operatorChoosen+secondnb);
            number=operator(firstnb,secondnb,operatorChoosen);
            console.log(number);
            firstnb=number;
            secondnb=0;
            operatorChoosen=null;
        }
  });
});

function add(x,y){
    return x+y;
}

function substract(x,y){
    return x-y;
}

function multiply(x,y){
    return x*y;
}

function divide(x,y){
    return x/y;
}


function operator(x, y, op){
    let res=0;
    if(op == "+"){
        res=add(x,y);
    }else if(op == "-"){
        res=substract(x,y);
    }else if(op == "*"){
        res=multiply(x,y);
    }else if(op == "/"){
        res=divide(x,y);
    }
    return res;
}
