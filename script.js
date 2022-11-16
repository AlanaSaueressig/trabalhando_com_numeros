let num = document.getElementById('numeroAdd');
let adiciona = document.getElementById('numerosenviados');
let resultado = document.querySelector('div#resultado')
let valores = [] //array

//funçao para ver se numero é de 1 a 100
function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true;
    } else {
        return false;
    }
}

// funçao para saber se numero digitado ja está na lista. -1 = não encontrado
function inLista (n, l){
    if(l.indexOf(Number(n)) != -1) {
        return true;
    } else {
        return false;
    }
}

function calcular(){
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option');
        item.text = `valor ${num.value} adicionado`;
        adiciona.appendChild(item);
        resultado.innerHTML = ''
    } else {
        window.alert('valor invalido ou ja encontrado na lista')
    }
    num.value = '' // clear input
    num.focus() // mouse ficará no input sempre
    
}

function finaliza (){
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar');
    } else {
        let maior = valores [0];
        let menor = valores [0];
        let soma = 0;
        let media = 0
        for (let pos in valores){
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        for (var sum = 0; sum < valores.length; sum++){
            soma = soma + valores[sum];
        }
    resultado.innerHTML = ''
    resultado.innerHTML += `Ao todo temos ${valores.length} numeros cadastrados. <br>
    O maior valor informado foi ${maior}. <br>
    O menor valor informado foi ${menor}. <br>
    Somando todos os valores, temos ${soma}.<br>
    A média dos valores digitados é ${soma / valores.length}.`;
    }
}


// let item = document.createElement('option');
