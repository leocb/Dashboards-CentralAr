// Pesquisa de reputação.
// Reclame Aqui
var urlsRA = [
    "https://iosite.reclameaqui.com.br/raichu-io-site-0.0.1-SNAPSHOT/company/11128/compare",
    "https://iosite.reclameaqui.com.br/raichu-io-site-0.0.1-SNAPSHOT/company/7936/compare",
    "https://iosite.reclameaqui.com.br/raichu-io-site-0.0.1-SNAPSHOT/company/6446/compare",
    "https://iosite.reclameaqui.com.br/raichu-io-site-0.0.1-SNAPSHOT/company/97826/compare",
    "https://iosite.reclameaqui.com.br/raichu-io-site-0.0.1-SNAPSHOT/company/18543/compare",
    "https://iosite.reclameaqui.com.br/raichu-io-site-0.0.1-SNAPSHOT/company/11871/compare",
    "https://iosite.reclameaqui.com.br/raichu-io-site-0.0.1-SNAPSHOT/company/98555/compare",
    "https://iosite.reclameaqui.com.br/raichu-io-site-0.0.1-SNAPSHOT/company/8789/compare",
    "https://iosite.reclameaqui.com.br/raichu-io-site-0.0.1-SNAPSHOT/company/98553/compare",
    "https://iosite.reclameaqui.com.br/raichu-io-site-0.0.1-SNAPSHOT/company/29266/compare",
    "https://iosite.reclameaqui.com.br/raichu-io-site-0.0.1-SNAPSHOT/company/928/compare",
    "https://iosite.reclameaqui.com.br/raichu-io-site-0.0.1-SNAPSHOT/company/14089/compare",
    "https://iosite.reclameaqui.com.br/raichu-io-site-0.0.1-SNAPSHOT/company/98556/compare",
    "https://iosite.reclameaqui.com.br/raichu-io-site-0.0.1-SNAPSHOT/company/10708/compare",
    "https://iosite.reclameaqui.com.br/raichu-io-site-0.0.1-SNAPSHOT/company/1634/compare",
    "https://iosite.reclameaqui.com.br/raichu-io-site-0.0.1-SNAPSHOT/company/97828/compare",
    "https://iosite.reclameaqui.com.br/raichu-io-site-0.0.1-SNAPSHOT/company/647/compare",
    "https://iosite.reclameaqui.com.br/raichu-io-site-0.0.1-SNAPSHOT/company/97827/compare",
    "https://iosite.reclameaqui.com.br/raichu-io-site-0.0.1-SNAPSHOT/company/11018/compare",
    "https://iosite.reclameaqui.com.br/raichu-io-site-0.0.1-SNAPSHOT/company/100761/compare",
    "https://iosite.reclameaqui.com.br/raichu-io-site-0.0.1-SNAPSHOT/company/37125/compare"
]

// Ebit
var nomesEmpresasEbit = [
    "CentralAr.com",
    "Amazon",
    "Americanas",
    "Carrefour",
    "Casas Bahia",
    "Extra.com",
    "Magazine Luiza",
    "Mercado Livre",
    "Ponto Frio",
    "Ricardo Eletro",
    "Shoptime",
    "Submarino",
    "Walmart",
    "Zoom"
]
var urlsEbit = [
    "//www.ebit.com.br/reputacao-de-lojas/historico?companyid=7562",
    "//www.ebit.com.br/reputacao-de-lojas/historico?companyid=66958",
    "//www.ebit.com.br/reputacao-de-lojas/historico?companyid=568",
    "//www.ebit.com.br/reputacao-de-lojas/historico?companyid=10581",
    "//www.ebit.com.br/reputacao-de-lojas/historico?companyid=740",
    "//www.ebit.com.br/reputacao-de-lojas/historico?companyid=2043",
    "//www.ebit.com.br/reputacao-de-lojas/historico?companyid=552",
    "//www.ebit.com.br/reputacao-de-lojas/historico?companyid=",
    "//www.ebit.com.br/reputacao-de-lojas/historico?companyid=566",
    "//www.ebit.com.br/reputacao-de-lojas/historico?companyid=3556",
    "//www.ebit.com.br/reputacao-de-lojas/historico?companyid=637",
    "//www.ebit.com.br/reputacao-de-lojas/historico?companyid=715",
    "//www.ebit.com.br/reputacao-de-lojas/historico?companyid=742",
    "//www.ebit.com.br/reputacao-de-lojas/historico?companyid="
]

// Create RA table.
var raTable = document.createElement('table')
var raBody = document.createElement('tbody')
raTable.appendChild(raBody)

// Create Ebit table.
var ebitTable = document.createElement('table')
var ebitBody = document.createElement('tbody')
ebitTable.appendChild(ebitBody)

//HEADER Ebit
var ebitRow = document.createElement('tr')
var ebitCell = document.createElement('th')
ebitCell.innerHTML = "Player"
ebitRow.appendChild(ebitCell)
ebitCell = document.createElement('th')
ebitCell.innerHTML = "Classificacao"
ebitRow.appendChild(ebitCell)
ebitCell = document.createElement('th')
ebitCell.innerHTML = "Prazo"
ebitRow.appendChild(ebitCell)
ebitCell = document.createElement('th')
ebitCell.innerHTML = "Compraria"
ebitRow.appendChild(ebitCell)
ebitCell = document.createElement('th')
ebitCell.innerHTML = "Indicaria"
ebitRow.appendChild(ebitCell)

//HEADER RA
var raRow = document.createElement('tr')

var raCell = document.createElement('th')
raCell.innerHTML = "Player"
raRow.appendChild(raCell)

raCell = document.createElement('th')
raCell.innerHTML = "Reclamacoes"
raRow.appendChild(raCell)
raCell = document.createElement('th')
raCell.innerHTML = "Respostas"
raRow.appendChild(raCell)
raCell = document.createElement('th')
raCell.innerHTML = "Nota"
raRow.appendChild(raCell)
raCell = document.createElement('th')
raCell.innerHTML = "Indice de Sol."
raRow.appendChild(raCell)
raCell = document.createElement('th')
raCell.innerHTML = "Voltaria"
raRow.appendChild(raCell)
raCell = document.createElement('th')
raCell.innerHTML = "Classificacao"
raRow.appendChild(raCell)

raCell = document.createElement('th')
raCell.innerHTML = "Reclamacoes"
raRow.appendChild(raCell)
raCell = document.createElement('th')
raCell.innerHTML = "Respostas"
raRow.appendChild(raCell)
raCell = document.createElement('th')
raCell.innerHTML = "Nota"
raRow.appendChild(raCell)
raCell = document.createElement('th')
raCell.innerHTML = "Indice de Sol."
raRow.appendChild(raCell)
raCell = document.createElement('th')
raCell.innerHTML = "Voltaria"
raRow.appendChild(raCell)
raCell = document.createElement('th')
raCell.innerHTML = "Classificacao"
raRow.appendChild(raCell)

raBody.appendChild(raRow)
ebitBody.appendChild(ebitRow)

var styles = document.createElement('style')
styles.innerHTML = ".pr table {display: block;font-family: sans-serif;-webkit-font-smoothing: antialiased;font-size: 80%;overflow: auto;width: auto; margin: 0px; border-collapse: collapse; text-align: center; } .pr th { background-color: rgb(112, 196, 105); color: white; font-weight: normal; padding: 10px 15px; text-align: center; } .pr td { background-color: rgb(238, 238, 238); color: rgb(111, 111, 111); padding: 0px 1px; } nav {display: none !important;}"
raTable.className = "pr"
ebitTable.className = "pr"
document.body.innerHTML = ""
document.head.appendChild(styles)
document.body.appendChild(raTable)
document.body.appendChild(ebitTable)

function PrintEbit(Nome, Classificacao, Prazo, Compraria, Indicaria) {
    var ebitRow = document.createElement('tr')
    var ebitCell = document.createElement('td')
    ebitCell.innerHTML = Nome
    ebitRow.appendChild(ebitCell)
    ebitCell = document.createElement('td')
    ebitCell.innerHTML = Classificacao
    ebitRow.appendChild(ebitCell)
    ebitCell = document.createElement('td')
    ebitCell.innerHTML = Prazo.toFixed(2).replace(".", ",") + "%"
    ebitRow.appendChild(ebitCell)
    ebitCell = document.createElement('td')
    ebitCell.innerHTML = Compraria.toFixed(2).replace(".", ",") + "%"
    ebitRow.appendChild(ebitCell)
    ebitCell = document.createElement('td')
    ebitCell.innerHTML = Indicaria.toFixed(2).replace(".", ",") + "%"
    ebitRow.appendChild(ebitCell)
    ebitBody.appendChild(ebitRow)
}

function PrintRA(nome,
    r12nRec, r12nResp, r12nota, r12indSol, r12volFazNeg, r12rank,
    r6nRec, r6nResp, r6nota, r6indSol, r6volFazNeg, r6rank
) {
    var raRow = document.createElement('tr')

    var raCell = document.createElement('td')
    raCell.innerHTML = nome
    raRow.appendChild(raCell)

    raCell = document.createElement('td')
    raCell.innerHTML = r12nRec
    raRow.appendChild(raCell)
    raCell = document.createElement('td')
    raCell.innerHTML = r12nResp
    raRow.appendChild(raCell)
    raCell = document.createElement('td')
    raCell.innerHTML = r12nota.toFixed(2).replace(".", ",")
    raRow.appendChild(raCell)
    raCell = document.createElement('td')
    raCell.innerHTML = r12indSol.toFixed(2).replace(".", ",") + "%"
    raRow.appendChild(raCell)
    raCell = document.createElement('td')
    raCell.innerHTML = r12volFazNeg.toFixed(2).replace(".", ",") + "%"
    raRow.appendChild(raCell)
    raCell = document.createElement('td')
    raCell.innerHTML = r12rank.replace("GREAT", "OTIMA").replace("GOOD", "BOM").replace("BAD", "RUIM").replace("NOT_RECOMMENDED", "NAO RECOMENDADO")
    raRow.appendChild(raCell)

    raCell = document.createElement('td')
    raCell.innerHTML = r6nRec
    raRow.appendChild(raCell)
    raCell = document.createElement('td')
    raCell.innerHTML = r6nResp
    raRow.appendChild(raCell)
    raCell = document.createElement('td')
    raCell.innerHTML = r6nota.toFixed(2).replace(".", ",")
    raRow.appendChild(raCell)
    raCell = document.createElement('td')
    raCell.innerHTML = r6indSol.toFixed(2).replace(".", ",") + "%"
    raRow.appendChild(raCell)
    raCell = document.createElement('td')
    raCell.innerHTML = r6volFazNeg.toFixed(2).replace(".", ",") + "%"
    raRow.appendChild(raCell)
    raCell = document.createElement('td')
    raCell.innerHTML = r6rank.replace("GREAT", "OTIMA").replace("GOOD", "BOM").replace("BAD", "RUIM").replace("NOT_RECOMMENDED", "NAO RECOMENDADO")
    raRow.appendChild(raCell)

    raBody.appendChild(raRow)
}


var i = -1

function nextEbitURL() {
    i++
    if (i < urlsEbit.length) {
        getResultsEbit(urlsEbit[i])
    }
}

function forceNextEbit() {
    PrintEbit(nomesEmpresasEbit[i], "", 0, 0, 0)
    nextEbitURL()
}

function getResultsEbit(urlToGetJson) {
    var xhttp = new XMLHttpRequest(); //cria o objeto
    xhttp.open("GET", urlToGetJson, true); //Link
    xhttp.timeout = 10000; //10 segundos para timeout
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) { //Status OK:
            //Lê o JSON
            var objJson = JSON.parse(JSON.parse(this.responseText))
            if (objJson.result == true) {
                PrintEbit(
                    objJson.Data.nome_fantasia,
                    objJson.Data.medalha,
                    objJson.Data.estatisticas[0].entrega_pontual,
                    objJson.Data.estatisticas[0].compraria_novamente,
                    objJson.Data.estatisticas[0].indicaria_amigo
                )
                nextEbitURL()
            } else {
                forceNextEbit(); //PRÓXIMO!
            }
        }
        if (this.readyState == 4 && this.status != 200) { //Status Outros:
            forceNextEbit(); //PRÓXIMO!
        }
    }
    xhttp.ontimeout = function (e) {
        forceNextEbit(); //PRÓXIMO!
    }
    xhttp.send()
}


function nextRaURL() {
    i++
    if (i < urlsRA.length) {
        getResultsRA(urlsRA[i])
    } else {
        i = -1
        nextEbitURL()
    }
}

function forceNextRA() {
    PrintRA(nomesEmpresasEbit[i], "", "", "", "", "", "", "", "", "", "", "", "")
    nextRaURL()
}

function getResultsRA(urlToGetJson) {
    var xhttp = new XMLHttpRequest(); //cria o objeto
    xhttp.open("GET", urlToGetJson, true); //Link
    xhttp.timeout = 10000; //10 segundos para timeout
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) { //Status OK:
            //Lê o JSON
            var objJson = JSON.parse(this.responseText)

            var nome = objJson.company.companyName

            if (objJson.company.companyIndex6Months) {

            }

            let r12 = false
            let r6 = false

            for (var j = 0; j < objJson.indexes.length; j++) {
                if (objJson.indexes[j].type == "TWELVE_MONTHS") {
                    r12 = true
                    var r12nRec = objJson.indexes[j].totalComplains || 0
                    var r12nResp = objJson.indexes[j].totalAnswered || 0
                    var r12nota = objJson.indexes[j].consumerScore || 0
                    var r12indSol = objJson.indexes[j].solvedPercentual || 0
                    var r12volFazNeg = objJson.indexes[j].dealAgainPercentual || 0
                    var r12rank = objJson.indexes[j].status || 0
                }
                if (objJson.indexes[j].type == "SIX_MONTHS") {
                    r6 = true
                    var r6nRec = objJson.indexes[j].totalComplains || 0
                    var r6nResp = objJson.indexes[j].totalAnswered || 0
                    var r6nota = objJson.indexes[j].consumerScore || 0
                    var r6indSol = objJson.indexes[j].solvedPercentual || 0
                    var r6volFazNeg = objJson.indexes[j].dealAgainPercentual || 0
                    var r6rank = objJson.indexes[j].status || 0
                }
            }

            if (r12 === false) {
                r12nRec = 0
                r12nResp = 0
                r12nota = 0
                r12indSol = 0
                r12volFazNeg = 0
                r12rank = "nao encontrado"
            }

            if (r6 === false) {
                r6nRec = 0
                r6nResp = 0
                r6nota = 0
                r6indSol = 0
                r6volFazNeg = 0
                r6rank = "nao encontrado"
            }

            PrintRA(nome,
                r12nRec, r12nResp, r12nota, r12indSol, r12volFazNeg, r12rank,
                r6nRec, r6nResp, r6nota, r6indSol, r6volFazNeg, r6rank
            )
            nextRaURL()
        }
        if (this.readyState == 4 && this.status != 200) { //Status Outros:
            forceNextRA(); //PRÓXIMO!
        }
    }
    xhttp.ontimeout = function (e) {
        forceNextRA(); //PRÓXIMO!
    }
    xhttp.send()
}

nextRaURL()