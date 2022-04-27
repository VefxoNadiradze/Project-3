let money_btn = document.getElementsByClassName('money-a');
let money_drop = document.getElementsByClassName('money-drop-down');
for(var a= 0 ;a<money_btn.length; a++){
    money_btn[a].addEventListener('click', money_drop_fun)
}

function money_drop_fun(){
    for(var a =0; a<money_drop.length; a++){

        if(money_drop[a].style.display == 'none'){
            money_drop[a].style.display = 'block'
        }else{
        money_drop[a].style.display = 'none'
        }
    }
    for(var a =0; a<language_drop.length; a++){
        language_drop[a].style.display = 'none'
    }
}

let language_btn = document.getElementsByClassName('language-a');
let language_drop = document.getElementsByClassName('language-drop-down');


for(var a= 0 ;a<language_btn.length; a++){
    language_btn[a].addEventListener('click', language_drop_fun)
}

function language_drop_fun(){
    for(var a =0; a<language_drop.length; a++){

        if(language_drop[a].style.display == 'none'){
            language_drop[a].style.display = 'block'
        }else{
        language_drop[a].style.display = 'none'
        }
    }

    for(var a =0; a<money_drop.length; a++){
        money_drop[a].style.display = 'none'
    }
}

let money_a_2 =document.getElementsByClassName('money-a-2')
let money_a_1 =document.getElementsByClassName('money-a-1')

for(var i = 0; i<money_a_2.length; i++){
    money_a_2[i].addEventListener('click', money_a_fun)
}

function money_a_fun(){
     for(var a= 0; a<money_a_1.length;a++){
         money_a_1[a].innerText = this.innerText
     }

     for(var k = 0; k<money_drop.length; k++){
         money_drop[k].style.display = 'none'
     }
}


let language_a_1 =document.getElementsByClassName('language-a-1')
let language_a_2 =document.getElementsByClassName('language-a-2')


for(var i = 0; i<language_a_2.length; i++){
    language_a_2[i].addEventListener('click', language_a_fun)
}

function language_a_fun(){
     for(var a= 0; a<language_a_1.length;a++){
         language_a_1[a].innerHTML = this.innerText
     }
     for(var k = 0; k<language_drop.length; k++){
        language_drop[k].style.display = 'none'
    }
}


let scrollToTop = document.getElementsByClassName('scroll-top');

for(var a= 0; a<scrollToTop.length; a++){
    scrollToTop[a].addEventListener('click', function(){
        window.scrollTo({
             top: 0,
             left: 0,
             behavior:"smooth"
        })
    })
}

window.addEventListener('scroll', function(){
    if(this.scrollY > 100){
          for(var a= 0; a<scrollToTop.length; a++){
             scrollToTop[a].style.visibility = 'visible'  
             scrollToTop[a].style.opacity = '1'  
        }
    }else{
        for(var a= 0; a<scrollToTop.length; a++){
            scrollToTop[a].style.visibility = 'hidden'  
            scrollToTop[a].style.opacity = '0'  
       }
    }
})

let hamburger = document.getElementsByClassName('hamburger');
let navigation = document.getElementsByClassName('navigation-2')

for(var i= 0; i<hamburger.length; i++){
    hamburger[i].addEventListener('click', nav_drop)
}

function nav_drop(){
    for(var a =0; a<navigation.length; a++){
      navigation[a].classList.toggle('nav-drop')
    }
}

let add_cart_btn = document.getElementsByClassName('add-cart-btn');
let basket_span = document.getElementsByClassName('shop-span')


for(var a = 0; a<add_cart_btn.length; a++){
    add_cart_btn[a].addEventListener('click', item_add_cartFun)
}

function item_add_cartFun(){
    for(var a =0; a<basket_span.length; a++){
        let amount  = add_cart_btn[a].value++;
         basket_span[a].innerText = amount+=1;
    }  
}





