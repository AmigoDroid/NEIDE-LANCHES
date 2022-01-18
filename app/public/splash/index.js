const list = document.querySelectorAll('.list');
const menuAL = document.querySelectorAll('.item');


//animar indicador
function activeLink(){
    list.forEach((item)=>
    item.classList.remove('active'));
    this.classList.add('active');
}
list.forEach((item)=>
item.addEventListener('click',activeLink));
// //menu AL
function clickMenu(){
    console.log('click');
menuAL.forEach((item)=>
item.classList.remove('active'));
this.classList.add('active');
console.log(this);
}
menuAL.forEach((fg)=>
fg.addEventListener('click',clickMenu));

//botoes menu
const pizza = document.getElementById('pizza');
const lanche = document.getElementById('lanche');
const almoco = document.getElementById('almoco');
//const perfil = document.getElementById('perfil');
  //sube menu
   
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
    adBandeco();
    bandecoMenu();
   
});
// perfil.addEventListener('click',function(){
//    // limpar();
//     console.log('perfil');
// });



window.onload = function(){
    limpar();
    adBandeco();
    bandecoMenu();
    const tfg = process.env.TESTE_KEY;
    console.log("variavel de ambiente: "+tfg);
    ///addTamanhos();
    //adPizza();
    // bandecoMenu();
    // adBandecoFit();
}

function RenderPizza(dados,pedido){
    const {nome , descrision}= dados;
    document.getElementById('root').innerHTML+=`
    <div class="card" onclick="abrirPZ(${pedido})">
    <div class="textCard">
        <h1>${nome}</h1>
        <p>${descrision}</p>
    </div>
</div>
    
    `;
}
function RenderLanches(dados,pedido){
    let {nome , descrision,valor}= dados;
    document.getElementById('root').innerHTML+=`
    <div class="card"onclick="abrirLC(${pedido})">
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
function RenderBandeco(dados,pedido){
    let {nome , descrision,valor}= dados;
    document.getElementById('root').innerHTML+=`
    <div class="card" onclick="abrirAL(${pedido})">
    <div class="textCard">
        <h1>${nome}</h1>
        <p>${descrision}</p>
    </div>
</div>
    
    `;
}
function RenderBandecoFit(dados,pedido){
    let {nome , descrision,valor}= dados;
    document.getElementById('root').innerHTML+=`
    <div class="card" onclick="abrirAL(${pedido})">
    <div class="integral">
    <p>100% <br> Integral</p>
    </div>
    <div class="textCard">
        <h1>${nome}</h1>
        <p>${descrision}</p>
    </div>
</div>

    `;
}
function bandecoMenu(){

    document.getElementById('tamanhos').innerHTML=`
    <div class="CardMenu">
    <h1>Tipo de Cardapio</h1>
     <div class="menu">
         <ul>
             <li>  
                 <a id="normal" class="item active">
                     <h1>Normal</h1>
                     <span></span>
                 </a>
             </li>
             <li>
                <a id="fitness" class="item">
                     <h1>Fitness</h1>
                     <span></span>
                 </a>
             </li>
         </ul>
         <p id="valorM">Valor da Marmita: 15,00 reais  </p>
     </div>
    `;

    const fitness = document.getElementById('fitness');
    const normal = document.getElementById('normal');
           //menu fitness
        fitness.addEventListener('click',function(){
            limpar();
            adBandecoFit();
            bandecoMenu();
                                });
        //menu normal
        normal.addEventListener('click',function(){
             limpar();
             adBandeco();
             bandecoMenu();
                              });
}
function limpar(){
    document.getElementById('root').innerHTML=` <div id="tamanhos">
               
    </div> <br>`;
}

function addTamanhos(){
    document.getElementById('tamanhos').innerHTML=`
    <div class="CardPrecos">
    <h1>Tamanhos de Pizzas</h1>
     <div class="precos">
         <ul>
             <li class="item">
                 <a>
                     <h1>P</h1>
                     <p>R$: 16,00</p>
                 </a>
             </li>
             <li class="item">
                 <a>
                     <h1>M</h1>
                     <p>R$: 26,00</p>
                 </a>
             </li>
             <li class="item">
                 <a>
                     <h1>G</h1>
                     <p>R$: 37,99</p>
                 </a>
             </li>
             <li class="item">
                 <a>
                     <h1>GG</h1>
                     <p>R$: 49,99</p>
                 </a>
             </li>
     
         </ul>
         <p>mini pizza R$: 10,00</p>
     </div>
    `;
}
//click pizza
function abrirPZ(dados){
    const data = new Date();
    const hora = data.getHours();
   var msg = '';
    if(hora>=5 && hora<12){
        msg = 'Bom Dia'
    }else if(hora>=12 && hora < 17){
        msg='Boa Tarde';
    }else{
        msg='Boa Noite';
    }
    location.assign("https://api.whatsapp.com/send?phone=5599988496976&text=Ol%C3%A1%2C%20"+msg+"%20quero%20fazer%20um%20pedido!")}

    //click Lanche
function abrirLC(dados){
        const data = new Date();
        const hora = data.getHours();
        var msg = '';
        if(hora>=5 && hora<12){
            msg = 'Bom Dia'
        }else if(hora>=12 && hora < 17){
            msg='Boa Tarde';
        }else{
            msg='Boa Noite';
        }
        location.assign("https://api.whatsapp.com/send?phone=5599988496976&text=Ol%C3%A1%2C%20"+msg+"%20quero%20fazer%20um%20pedido!")}
    
    //CLICK ALMOÇO
    function abrirAL(dados){
        const data = new Date();
        const hora = data.getHours();
        var msg = '';
        if(hora>=5 && hora<12){
            msg = 'Bom Dia'
        }else if(hora>=12 && hora < 17){
            msg='Boa Tarde';
        }else{
            msg='Boa Noite';
        }
         location.assign("https://api.whatsapp.com/send?phone=5599988496976&text=Ol%C3%A1%2C%20"+msg+"%20quero%20fazer%20um%20pedido!")
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
function adBandeco(){
    for(let i =0;i<bandeco.length;i++){
        RenderBandeco(bandeco[i],i);
    }
}
function adBandecoFit(){
    for(let i =0;i<bandecoFit.length;i++){
        RenderBandecoFit(bandecoFit[i],i);
    }
}