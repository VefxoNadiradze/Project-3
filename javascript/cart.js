let remove_span =document.getElementsByClassName('remove-span');

for(var k =0; k<remove_span.length; k++){
    remove_span[k].addEventListener('click', remove_fun)
}

function remove_fun(){
    this.parentElement.parentElement.style.display = 'none'
}

let option_1 = document.getElementsByClassName('option-1');
for(var x =0; x<option_1.length; x++){
    option_1[x].addEventListener('click', multiply_fun)
}
function multiply_fun(){
    let subtotal = 910.00;
    let multi = this.value * subtotal;
    this.parentElement.parentElement.nextElementSibling.firstElementChild.innerText = '$' + multi;
}


let option_2 = document.getElementsByClassName('option-2');
for(var x =0; x<option_2.length; x++){
    option_2[x].addEventListener('click', multiply_fun_2)
}
function multiply_fun_2(){
    let subtotal = 1100.00;
    let multi = this.value * subtotal;
    this.parentElement.parentElement.nextElementSibling.firstElementChild.innerText = '$' + multi;
}



let option_3 = document.getElementsByClassName('option-3');
for(var x =0; x<option_3.length; x++){
    option_3[x].addEventListener('click', multiply_fun_3)
}
function multiply_fun_3(){
    let subtotal = 550.00;
    let multi = this.value * subtotal;
    this.parentElement.parentElement.nextElementSibling.firstElementChild.innerText = '$' + multi;
}
