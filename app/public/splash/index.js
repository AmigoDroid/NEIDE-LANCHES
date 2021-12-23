const list = document.querySelectorAll('.list');
const id =0;
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
    //pizzs
    RenderPizza(pz(),0)
});
lanche.addEventListener('click',function(){
    //lanche
    });
almoco.addEventListener('click',function(){
    //almoço
});

function pz (){
const pizza={
    nome:'moda da casa',
    descrision:'leva calabresa queijo e frango com mussarela'
}
return pizza;
}

function RenderPizza(dados, id){
    document.getElementById('root').innerHTML+=`
    <div class="card">
    <div class="textCard">
        <h1>${dados.nome+' / '+id}</h1>
        <p>${dados.descrision}</p>
    </div>
    <div class="button">
        <h2>Whatsap</h2>
        <ion-icon name="logo-whatsapp" class="icon-whatssap"></ion-icon>
    </div>
</div>
    
    `;
}
    