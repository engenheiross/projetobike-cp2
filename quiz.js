let perguntas =  [
        {
            "pergunta": "Qual o componente da bicicleta que converte o movimento das pernas em movimento das rodas?",
            "respostas": [
                "Pedal",
                "Guidão",
                "Corrente",
                "Quadro",
                "Coroa"
            ],
            "correta": "Corrente"
        },
        {
            "pergunta": "Qual o nome da competição de ciclismo de estrada mais famosa do mundo?",
            "respostas": [
                "Volta à França",
                "Giro d'Italia",
                "Tour de Portugal",
                "Vuelta a España",
                "Paris-Roubaix"
            ],
            "correta": "Volta à França"
        },
        {
            "pergunta": "Qual é o tipo de bicicleta ideal para competições de velocidade em circuitos fechados?",
            "respostas": [
                "Mountain Bike",
                "Bicicleta de Trilha",
                "Bicicleta Urbana",
                "Bicicleta de Estrada",
                "Bicicleta de Pista"
            ],
            "correta": "Bicicleta de Pista"
        },
        {
            "pergunta": "Qual material é mais comum na fabricação de quadros de bicicleta de alta performance?",
            "respostas": [
                "Aço",
                "Ferro",
                "Alumínio",
                "Madeira",
                "Carbono"
            ],
            "correta": "Carbono"
        },
        {
            "pergunta": "Qual o nome do mecanismo que permite trocar as marchas na bicicleta?",
            "respostas": [
                "Cambio",
                "Freio",
                "Catraca",
                "Câmbio",
                "Pedal"
            ],
            "correta": "Câmbio"
        },
        {
            "pergunta": "Qual o nome da competição de mountain bike que ocorre anualmente no deserto do Arizona, Estados Unidos?",
            "respostas": [
                "Red Bull Rampage",
                "Crankworx",
                "Cape Epic",
                "Enduro World Series",
                "Leadville Trail 100 MTB"
            ],
            "correta": "Leadville Trail 100 MTB"
        },
        {
            "pergunta": "Qual o nome do primeiro veículo de duas rodas movido por pedal?",
            "respostas": [
                "Penny-farthing",
                "Triciclo",
                "Tandem",
                "Bicicleta de Carga",
                "Boneshaker"
            ],
            "correta": "Boneshaker"
        },
        {
            "pergunta": "Qual o termo utilizado para descrever a prática de pedalar em conjunto com outros ciclistas?",
            "respostas": [
                "Convívio",
                "Pelotão",
                "Bando",
                "Revoada",
                "Comboio"
            ],
            "correta": "Pelotão"
        },
        {
            "pergunta": "Qual o nome da empresa que fabrica as bicicletas com o slogan 'Just Ride'?",
            "respostas": [
                "Trek",
                "Specialized",
                "Giant",
                "Cannondale",
                "Santa Cruz"
            ],
            "correta": "Santa Cruz"
        },
        {
            "pergunta": "Qual o nome do tipo de bicicleta voltado para longas distâncias, com geometria confortável e diversos pontos de fixação para bagagem?",
            "respostas": [
                "Bicicleta de Carga",
                "Bicicleta de Trilha",
                "Bicicleta de Estrada",
                "Bicicleta Híbrida",
                "Bicicleta de Turismo"
            ],
            "correta": "Bicicleta de Turismo"
        }
]

let perguntaIndex = 0;
let acertos = 0;

let mostrandoResultado = false;

let campoDePerguntas = document.getElementById("quiz")

function criar_pergunta(perguntaObj) {
    
        const novaPergunta = document.createElement("div");
        novaPergunta.innerHTML = "<div class=\"perguntas\">" + perguntaObj.pergunta + "</div>"
        const respostas = document.createElement("div");
        respostas.classList.add("respostas");
        respostas.id = "respostas";
        for(j = 0; j<Object.keys(perguntaObj.respostas).length; j++) {
            if(perguntaObj.respostas[j] == perguntaObj.correta) { 
                respostas.innerHTML += "<p id=\"correta\"> <input name=button1"   + " type=\"radio\">" + perguntaObj.respostas[j]; + "</p>";
            }
            else {
                respostas.innerHTML += "<p> <input name=button1"  + " type=\"radio\">" + perguntaObj.respostas[j] +  "</p>"
            }
            
        }
        novaPergunta.innerHTML += "</div>"
        novaPergunta.classList.add('pergunta');
        
        novaPergunta.appendChild(respostas);
        campoDePerguntas.appendChild(novaPergunta);

        document.getElementById("correta").style.backgroundColor = "#d0d8d4";
        botao1 = document.createElement("button");
        botao1.innerHTML = "Enviar Resposta";
        botao1.id = "botao1";
        botao1.onclick = mostrar_resultado;

        botoes = document.createElement("div");
        botoes.id = "botoes";

        botoes.appendChild(botao1);
        campoDePerguntas.appendChild(botoes);

        
    }






    criar_pergunta(perguntas[0]);

    
function checar_vazio() {
    respostas = document.getElementById("respostas").children;
    
    console.log(respostas);
    let conta = 0;
    for(i = 0; i<respostas.length; i++) {
        if(respostas[i].children[0].checked) { conta += 1 }
    }

    return conta == 0;
}

function mostrar_resultado() {
    if(checar_vazio()) { return 0;  }
    mostrandoResultado = true;
    botao1.innerHTML = "Continuar";
    botao1.onclick = proxima_pergunta;
    document.getElementById("correta").style.backgroundColor = "green";

    checkmark = document.createElement("img");
    checkmark.classList.add("check");
    checkmark.id = "check";
    checkmark.src = "https://static-00.iconduck.com/assets.00/check-mark-button-emoji-2048x2048-lq7rf7h8.png";
    document.getElementById("correta").appendChild(checkmark);
    respostas = document.getElementById("respostas").children;
    console.log(respostas);
    for(i = 0; i<respostas.length; i++) {
        if(respostas[i].children[0].checked && respostas[i].id != "correta") {
            wrongmark = document.createElement("img");
            wrongmark.id = "check";
            wrongmark.src = "https://cdn3.emoji.gg/emojis/x.png";
            respostas[i].appendChild(wrongmark);
            respostas[i].style.backgroundColor = "red";
            console.log(respostas[i]);
        }
        if(respostas[i].children[0].checked && respostas[i].id == "correta") {
            acertos+=1;
        }
    }
}
function proxima_pergunta() {

    campoDePerguntas.removeChild(document.getElementsByClassName("pergunta")[0]);
    campoDePerguntas.removeChild(document.getElementById("botoes"));
    mostrandoResultado = false;

    
    if(perguntaIndex >= Object.keys(perguntas).length-1) {
        finalizar_teste();
        return 0;
    }
    perguntaIndex += 1;
    criar_pergunta(perguntas[perguntaIndex]);
}
function finalizar_teste() {
    campoDePerguntas.style.justifyContent = "center";
    campoDePerguntas.style.alignItems = "center";
    campoDePerguntas.innerHTML = "<h3>Você acertou <span class=\"acertos\"> " + acertos + " </span> de " + Object.keys(perguntas).length + " perguntas. </h3>";

    perguntas = Object.keys(perguntas).length;
    let nivel;
    if(acertos/perguntas === 1) {
        nivel = "<span class=\"verde\">Perfeito</span>";
    }
    else if(acertos/perguntas >= 0.6) {
        nivel = "<span class=\"verde\">Bom</span>";
    }
    else if (acertos/perguntas >= 0.3) {
        nivel = "<span class=\"amarelo\">Mediano</span>";
    }
    else {
        nivel = "<span class=\"vermelho\">Ruim</span>";
    }
    campoDePerguntas.innerHTML += "<h3>Seu conhecimento em Bicicletas é " + nivel + "</h3>"

    console.log(acertos);
}
