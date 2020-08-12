

function nunca_chamada () {
    console.log("Voce nao deve executar esta funcao!");
  }
  

  
  var i = 0
if(i<10){
    i++
var interval1 = setInterval(nunca_chamada,1000);
}else{
    clearTimeout(timeout1);
clearInterval(interval1);
}
  
  