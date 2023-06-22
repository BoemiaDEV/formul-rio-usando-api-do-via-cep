function validacao(){
    let nome = document.getElementById("i_nome");
    let sobre = document.getElementById("i_sobrenome");
    let cep = document.getElementById("i_cep");
    let email = document.getElementById("i_email");

    input_style(nome, "#f45656", "#008000");
    input_style(sobre, "#f45656", "#008000");
    input_style(cep, "#f45656", "#008000");
    input_style(email, "#f45656", "#008000");

}


function input_style(input, cor_1, cor_2){

    if(!input.checkValidity()){ 
        return input.style.border = `3px solid ${cor_1}`;
    }else{
        return input.style.border = `3px solid ${cor_2}`;
    }

}