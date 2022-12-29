
const text = document.getElementsByClassName("text")[0];
const smalltext = document.getElementsByClassName("afterResult")[0];

const inputs = document.querySelectorAll('.nb7');

let number=0;
let firstnb='';
let secondnb='';
let operatorChoosen=null;


inputs.forEach(input => {
  input.addEventListener('click', function() {
    
        if(operatorChoosen==null){
            if(this.value != "+" && this.value != "-" && this.value !="/" && this.value !="*" ){
                firstnb+=this.value;
               // firstnb=firstnb.replace('null','');
                text.textContent=firstnb;
                console.log(firstnb);
            }
            else if(this.value != "="){
                operatorChoosen=this.value;
                text.textContent=text.textContent+operatorChoosen;
            }
        }else{
            if(firstnb==''){
                firstnb=0;
            }
            if(this.value != "+" && this.value != "-" && this.value !="/" && this.value !="*" ){
               // secondnb=secondnb.replace('null','');
                secondnb=secondnb+this.value;
                text.textContent+=secondnb;
            } 
        }
        if(this.value=="="){
            firstnb=parseFloat(firstnb);
            secondnb=parseFloat(secondnb);
            console.log(firstnb + operatorChoosen+secondnb);
            number=operator(firstnb,secondnb,operatorChoosen);
            smalltext.textContent=firstnb+operatorChoosen+secondnb+"=";
            console.log(number);
            text.textContent=number;
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
