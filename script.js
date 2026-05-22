console.log("Sistema iniciado com sucesso!");


// ======================================
// ADMIN
// ======================================

let adminLogado = false;

let usuarioAdmin = "admin";

let senhaAtual = localStorage.getItem("senhaAdmin") || "bellagabriella2102";


// ======================================
// LOGIN
// ======================================

const entrar = document.querySelector("#entrar");

const painelAdmin = document.querySelector("#painelAdmin");

const login = document.querySelector(".login");


entrar.addEventListener("click", function(){

    let usuario = document.querySelector("#usuario").value;

    let senha = document.querySelector("#senha").value;


    if(usuario === usuarioAdmin && senha === senhaAtual){

        adminLogado = true;

        alert("Login realizado com sucesso!");

        login.style.display = "none";

        painelAdmin.style.display = "block";
    }

    else{

        alert("Usuário ou senha incorretos.");
    }

});


// ======================================
// EDITAR TEXTO
// ======================================

document.querySelector("#editarTexto").addEventListener("click", function(){

    let novoTexto = prompt("Digite o novo texto da loja:");

    if(novoTexto){

        document.querySelector("#textoLoja").innerText = novoTexto;

        localStorage.setItem("textoLoja", novoTexto);
    }

});


// ======================================
// EDITAR REDES
// ======================================

document.querySelector("#editarRedes").addEventListener("click", function(){

    let instagram = prompt("Digite o Instagram:");

    if(instagram){

        document.querySelector("#instagramLoja").innerText =
        "Instagram: " + instagram;

        localStorage.setItem("instagramLoja", instagram);
    }


    let facebook = prompt("Digite o Facebook:");

    if(facebook){

        document.querySelector("#facebookLoja").innerText =
        "Facebook: " + facebook;

        localStorage.setItem("facebookLoja", facebook);
    }

});


// ======================================
// EDITAR HORÁRIO
// ======================================

document.querySelector("#editarHorario").addEventListener("click", function(){

    let horario = prompt("Digite o novo horário:");

    if(horario){

        document.querySelector("#horarioLoja").innerText = horario;

        localStorage.setItem("horarioLoja", horario);
    }

});


// ======================================
// EDITAR TELEFONE
// ======================================

document.querySelector("#editarContatos").addEventListener("click", function(){

    let telefone = prompt("Digite o novo telefone:");

    if(telefone){

        document.querySelector("#telefoneLoja").innerText = telefone;

        localStorage.setItem("telefoneLoja", telefone);
    }

});


// ======================================
// EDITAR ENDEREÇO
// ======================================

document.querySelector("#editarEndereco").addEventListener("click", function(){

    let endereco = prompt("Digite o novo endereço:");

    if(endereco){

        document.querySelector("#enderecoLoja").innerText = endereco;

        localStorage.setItem("enderecoLoja", endereco);
    }

});


// ======================================
// EDITAR PAGAMENTO
// ======================================

document.querySelector("#editarPagamento").addEventListener("click", function(){

    let pagamento = prompt("Digite as formas de pagamento:");

    if(pagamento){

        document.querySelector("#pagamentoLoja").innerText = pagamento;

        localStorage.setItem("pagamentoLoja", pagamento);
    }

});


// ======================================
// TROCAR COR
// ======================================

document.querySelector("#trocarCor").addEventListener("click", function(){

    let cor = prompt("Digite uma cor:");

    if(cor){

        document.body.style.background = cor;

        localStorage.setItem("corSite", cor);
    }

});


// ======================================
// MUDAR SENHA
// ======================================

document.querySelector("#mudarSenha").addEventListener("click", function(){

    let novaSenha = prompt("Digite a nova senha:");

    if(novaSenha){

        senhaAtual = novaSenha;

        localStorage.setItem("senhaAdmin", novaSenha);

        alert("Senha alterada com sucesso!");
    }

});


// ======================================
// SAIR
// ======================================

document.querySelector("#sair").addEventListener("click", function(){

    adminLogado = false;

    painelAdmin.style.display = "none";

    login.style.display = "block";

    document.querySelector("#usuario").value = "";

    document.querySelector("#senha").value = "";

    alert("Você saiu do painel.");

});


// ======================================
// GALERIA
// ======================================

const galeria = document.querySelector("#galeria");

const inputFoto = document.querySelector("#inputFoto");

const editarFotos = document.querySelector("#editarFotos");

let imagemAtual = null;


// ======================================
// ATIVAR GALERIA
// ======================================

function ativarGaleria(){

    let imagens = document.querySelectorAll(".imagemLoja");


    imagens.forEach(function(imagem){

        // TROCAR FOTO

        imagem.onclick = function(){

            if(adminLogado === false){

                return;
            }

            imagemAtual = imagem;

            inputFoto.click();
        };


        // APAGAR FOTO

        imagem.ondblclick = function(){

            if(adminLogado === false){

                return;
            }

            let apagar = confirm("Deseja apagar esta imagem?");

            if(apagar){

                imagem.remove();

                salvarGaleria();
            }

        };

    });

}


// ======================================
// ESCOLHER FOTO
// ======================================

inputFoto.addEventListener("change", function(event){

    let arquivo = event.target.files[0];

    if(!arquivo){

        return;
    }


    let leitor = new FileReader();


    leitor.onload = function(e){

        // TROCAR FOTO

        if(imagemAtual){

            imagemAtual.src = e.target.result;
        }

        // ADICIONAR FOTO

        else{

            let novaImagem = document.createElement("img");

            novaImagem.src = e.target.result;

            novaImagem.classList.add("imagemLoja");

            galeria.appendChild(novaImagem);
        }


        salvarGaleria();

        ativarGaleria();

        imagemAtual = null;
    };


    leitor.readAsDataURL(arquivo);

});


// ======================================
// BOTÃO ADICIONAR FOTO
// ======================================

editarFotos.addEventListener("click", function(){

    if(adminLogado === false){

        return;
    }

    imagemAtual = null;

    inputFoto.click();
});


// ======================================
// SALVAR GALERIA
// ======================================

function salvarGaleria(){

    localStorage.setItem("galeriaLoja", galeria.innerHTML);
}


// ======================================
// CARREGAR DADOS
// ======================================

window.onload = function(){

    let textoSalvo = localStorage.getItem("textoLoja");

    if(textoSalvo){

        document.querySelector("#textoLoja").innerText = textoSalvo;
    }


    let instagramSalvo = localStorage.getItem("instagramLoja");

    if(instagramSalvo){

        document.querySelector("#instagramLoja").innerText =
        "Instagram: " + instagramSalvo;
    }


    let facebookSalvo = localStorage.getItem("facebookLoja");

    if(facebookSalvo){

        document.querySelector("#facebookLoja").innerText =
        "Facebook: " + facebookSalvo;
    }


    let horarioSalvo = localStorage.getItem("horarioLoja");

    if(horarioSalvo){

        document.querySelector("#horarioLoja").innerText =
        horarioSalvo;
    }


    let telefoneSalvo = localStorage.getItem("telefoneLoja");

    if(telefoneSalvo){

        document.querySelector("#telefoneLoja").innerText =
        telefoneSalvo;
    }


    let enderecoSalvo = localStorage.getItem("enderecoLoja");

    if(enderecoSalvo){

        document.querySelector("#enderecoLoja").innerText =
        enderecoSalvo;
    }


    let pagamentoSalvo = localStorage.getItem("pagamentoLoja");

    if(pagamentoSalvo){

        document.querySelector("#pagamentoLoja").innerText =
        pagamentoSalvo;
    }


    let corSalva = localStorage.getItem("corSite");

    if(corSalva){

        document.body.style.background = corSalva;
    }


    let galeriaSalva = localStorage.getItem("galeriaLoja");

    if(galeriaSalva){

        galeria.innerHTML = galeriaSalva;
    }


    ativarGaleria();

};