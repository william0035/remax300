
function mascara(telefone){ 
        if (telefone.value.length == 11)
        telefone.value =  '(' + telefone.value.slice(0, 2) + ') ' + telefone.value.slice(2, 7) + " - " + telefone.value.slice(7) 
        if (telefone.value.length == 10 )
        telefone.value =  '(' + telefone.value.slice(0, 2) + ') ' + telefone.value.slice(2, 6) + " - " + telefone.value.slice(6)
    }
 
function mouseon(){
    let buttonSubmit = document.querySelector("#buttonSubmit"); 
    buttonSubmit.style.background = 'red';
}  
function mouseoff(){
    let buttonSubmit = document.querySelector("#buttonSubmit"); 
    buttonSubmit.style.background = 'blue';
} 
  
