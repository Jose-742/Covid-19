

/*API PARA SER USADA COM AS INFORMAÇÕES DE CADA ESTADO BASTA MUDAR O TO NO FINAL */
//   https://covid19-brazil-api.vercel.app/api/report/v1/brazil/uf/to

function criaAjaxGet(url, funcao) {
    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = funcao;
    ajax.open("GET", url, true);
    ajax.send();
}

function requisicao() {
    let select = document.getElementById("selecao").value

    //console.log(select)
    let url = 'https://covid19-brazil-api.vercel.app/api/report/v1/brazil/uf/' + select;
    criaAjaxGet(url, resposta)
}

function resposta() {

    if (this.readyState === 4 && this.status === 200) {
        let dadosResposta = this.responseText;
        let dadosJSONObj = JSON.parse(dadosResposta)

        let estado = dadosJSONObj.state
        let data_hora = dadosJSONObj.datetime
        let mortes = dadosJSONObj.deaths
        let suspeitos = dadosJSONObj.suspects
        let casos = dadosJSONObj.cases

        //console.log(dadosJSONObj.state) Estado
        //console.log(dadosJSONObj.datetime) data hora 
        //console.log(dadosJSONObj.deaths) mortes
        //console.log(dadosJSONObj.suspects) suspeitos
        //console.log(dadosJSONObj.cases) casos

        let resultado = document.getElementById("resultado")
        resultado.innerHTML = "";
        resultado.className = "result"

        let b1 = document.createElement("b") /* ESTADO */
        b1.innerHTML = "<ion-icon name='business-outline'></ion-icon> Estado: " 
        let p1 = document.createElement("p")
        let text1 = document.createTextNode(estado)
        p1.appendChild(b1)
        p1.appendChild(text1)
        resultado.appendChild(p1)

        let b2 = document.createElement("b") /* DATA E HORA*/
        b2.innerHTML = "<ion-icon class='horas' name='time-outline'></ion-icon> Atualizado: " 
        let p2 = document.createElement("p")
        let text2 = document.createTextNode(data_hora)
        let dat = new Date(text2.data)
        let ano = dat.toISOString().substr(0, 4)
        let mes = dat.toISOString().substr(5, 2)
        let dia = dat.toISOString().substr(8, 2)
        //console.log( dia + "/" + mes + "/" + ano)
        let resutlData  = document.createTextNode(dia + "/" + mes + "/" + ano)
        p2.appendChild(b2)
        p2.appendChild(resutlData)
        resultado.appendChild(p2)

        let b3 = document.createElement("b") /* MORTES*/ 
        b3.innerHTML = "<ion-icon class='caveira' name='skull-outline'></ion-icon> Mortos: " 
        let p3 = document.createElement("p")
        let text3 = document.createTextNode(mortes)
        
        p3.appendChild(b3)
        p3.appendChild(text3)
        
        resultado.appendChild(p3)

        let b4 = document.createElement("b") /*SUSPEITOS*/
        b4.innerHTML = "<ion-icon class='suspeitos' name='bag-remove-outline'></ion-icon> Suspeitos: " 
        let p4 = document.createElement("p")
        let text4 = document.createTextNode(suspeitos)
        p4.appendChild(b4)
        p4.appendChild(text4)
        resultado.appendChild(p4)

        let b5 = document.createElement("b") /*CASOS*/ /*<ion-icon name='bag-check-outline'></ion-icon> Confirmados: */
        b5.innerHTML = "<ion-icon class='confirmados' name='checkmark-outline'></ion-icon> Confirmados: " 
        let p5 = document.createElement("p")
        let text5 = document.createTextNode(casos)
        p5.appendChild(b5)
        p5.appendChild(text5)
        resultado.appendChild(p5)

        
    }
}