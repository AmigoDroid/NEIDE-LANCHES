const list = document.querySelectorAll('.list');
//animar indicador
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
    limpar();
    adPizza();
});
lanche.addEventListener('click',function(){

    //lanche
    limpar();
    adLanches();
    });
almoco.addEventListener('click',function(){
    //almoço
    limpar();
});

window.onload = function(){
    limpar();
    addTamanhos();
    adPizza();
}

function RenderPizza(dados,id){
    let {nome , descrision}= dados;
    document.getElementById('root').innerHTML+=`
    <div class="card">
    <div class="textCard">
        <h1>${nome}</h1>
        <p>${descrision}</p>
    </div>
</div>
    
    `;
}
function RenderLanches(dados,id){
    let {nome , descrision,valor}= dados;
    document.getElementById('root').innerHTML+=`
    <div class="card">
    <div class="textCard">
        <h1>${nome}</h1>
        <p>${descrision}</p>
    </div>
    <div class="button">
    <h3>${valor}</h3>
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
function adPizza(){
    addTamanhos();
    for(let i =0;i<pizzas.length;i++){
        RenderPizza(pizzas[i],i);
    }
}
function adLanches(){
    for(let i =0;i<lanches.length;i++){
        RenderLanches(lanches[i],i);
    }
}