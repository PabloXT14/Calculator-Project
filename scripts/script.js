function val(result) {
    //form= nome que demos para o nosso form, disp=nome do input
    form.disp.value = form.disp.value + result;
}

function calculate() {
    if(form.disp.value == "") {
        alert("Please entre numbers");
    } else {
        form.disp.value = eval(form.disp.value)
        
    }

    /* #eval()
    - eval() é uma função de propriedade do objeto global (window)
    - A função eval() avalia ou executa um argumento.
    - Se o argumento for uma expressão, eval() avalia a expressão. Se o argumento for uma ou mais instruções JavaScript, eval() executa as instruções.  
    - Sintaxe: eval(string)  
    */
}


/* Clear Display */
const btn = form.clear;
//Clear All display
// btn.addEventListener("dblclick", ()=> {
//     form.disp.value = "";
// });
//Clear last string
btn.addEventListener("click", ()=> {
    /* replace() para limpar ultima char de uma string
    - O caractere "$" é usado para corresponder ao final da entrada.
    - O “.” é usado para corresponder a um único caractere.
    - Portanto, a expressão regular /.$/ pode ser usada para obter o último caractere de uma string.
    */
   form.disp.value = form.disp.value.replace(/.$/, "");
})
