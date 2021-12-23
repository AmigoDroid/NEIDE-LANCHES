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
    addTamanhos();
    RenderPizza(pz(),0)
});
lanche.addEventListener('click',function(){

    //lanche
    limpar()
    });
almoco.addEventListener('click',function(){
    //almoço
});

window.onload = function(){
    limpar();
    addTamanhos();
    RenderPizza(pz(),0);
}

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
function limpar(){
    document.getElementById('root').innerHTML=` <div id="tamanhos">
               
    </div> <br>`;
}
function addTamanhos(){
    document.getElementById('tamanhos').innerHTML=`
    <div class="CardPrecos">
    <h1>Tamanhos</h1>
     <div class="precos">
         <ul>
             <li class="item">
                 <a>
                     <h1>P</h1>
                     <p>R$: 15</p>
                 </a>
             </li>
             <li class="item">
                 <a>
                     <h1>M</h1>
                     <p>R$: 25</p>
                 </a>
             </li>
             <li class="item">
                 <a>
                     <h1>G</h1>
                     <p>R$: 38</p>
                 </a>
             </li>
             <li class="item">
                 <a>
                     <h1>GG</h1>
                     <p>R$: 50</p>
                 </a>
             </li>
     
         </ul>
     </div>
    `;
}
    