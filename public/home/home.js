


function tt (){
const teste ={
    titulo:'bandeco com salada',
    type:false
}
return teste;
}
window.onload=()=>{
    let j = 4;
    for(let i =0; i<j; i++){
        
        renderDestaque(tt());
        console.log(i);
    }
}




function renderDestaque(dados){
  const{titulo,type}=dados; 
  console.log(dados);
  const div =  document.getElementById('destaques');
  div.innerHTML+=
  `<div class="card">
  <h4>${titulo}</h4>
  <div class="img">
      <img src="../../src/img/logo.jpg" alt="icon">
  </div>
  <button onclick='pedirDestaque()'>pedir</button>
  </div>
  `;
}
function pedirDestaque(){
    alert('pedido feito!');
}