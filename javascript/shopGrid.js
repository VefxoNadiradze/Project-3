let tab_list_btn = document.getElementsByClassName('tab-list-btn');
let item_1 = document.getElementsByClassName('item-1')


for(var a=0; a<tab_list_btn.length; a++){
    tab_list_btn[a].addEventListener('click', tab_list_fun)
}

function tab_list_fun(){
    for(var i=0; i< item_1.length; i++){
        item_1[i].parentElement.classList = 'col-lg-12'
        item_1[i].classList.add('tab-list-card')
    }
}


let grid_btn =document.getElementsByClassName('grid-btn');

for(var k =0; k<grid_btn.length; k++){
    grid_btn[k].addEventListener('click', function(){
        for(var i=0; i< item_1.length; i++){
            item_1[i].parentElement.classList= 'col-lg-4 col-md-6 col-sm-12'
            item_1[i].classList.remove('tab-list-card')
        }
    })
}