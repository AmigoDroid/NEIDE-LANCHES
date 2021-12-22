const list = document.querySelectorAll('.list');
const id ='';
function activeLink(){
    list.forEach((item)=>
    item.classList.remove('active'));
    this.classList.add('active');
}
list.forEach((item)=>
item.addEventListener('click',activeLink));
//botoes menu
const pizza = document.getElementById('pizza');
const lanche = document.getElementById('lanche');
const almoco = document.getElementById('almoco');
//
pizza.addEventListener('click',function(){
    //pizza
});
lanche.addEventListener('click',function(){
    //lanche
    });
almoco.addEventListener('click',function(){
    //almoço
});
    