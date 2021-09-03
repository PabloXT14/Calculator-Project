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

const btn = form.veql;
btn.addEventListener("dblclick", ()=> {
    form.disp.value = "";
});