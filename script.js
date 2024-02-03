function area(){
    let n1=parseFloat(document.getElementById("n1").value);
    res=(n1*n1)*3.14;
    total=res/100;
    document.getElementById("situacao").innerHTML = 
    `Área de sua circunferência é: ${total.toFixed(3)} m²;`
}

function grau(){
    let n7=parseFloat(document.getElementById("grau").value);
    C = (9*n7+160)/5;
    document.getElementById("fahrenheit").innerHTML = 
    `Conversão: ${C}F;`
}

function nome(){
    let nome= (document.getElementById("primeiro").value);
    let sobrenome= (document.getElementById("sobrenome").value);
    document.getElementById("nome").innerHTML=
    `Olá, ${nome} ${sobrenome}!! Tudo bem!?`
}

function salarios(){
    let HT = parseFloat(document.getElementById("HT").value);
    let VH = parseFloat(document.getElementById("VH").value);
    let PD = parseFloat(document.getElementById("PD").value);

    SB = HT * VH;
    TD = (PD/100)*SB;
    SL = SB - TD;
    
    document.getElementById("salario").innerHTML=
    `Você trabalhou por: ${HT} horas; <br> Seu Salário Bruto: ${SB} reais; <br> Total de desconto: ${TD} reais; <br> Seu Salário Líquido: ${SL} reais;`
}

function fahrenheit(){
    let n1=parseFloat(document.getElementById("F").value);
    res= [n1-32]*5/9
    document.getElementById("graus").innerHTML = 
    `Conversão em celsius: ${res.toFixed()}°;`
}

function volumeLata(){
    let raio= parseInt(document.getElementById("raio").value);
    let altura= parseInt(document.getElementById("altura").value);
    let Volume = 3*(raio*raio)*(altura);

    document.getElementById("VolumeObjeto").innerHTML = 
    `O volume do objeto é: ${Volume.toFixed()} cm³;`
}

