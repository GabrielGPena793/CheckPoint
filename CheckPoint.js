// Aula 16/08/2021 - CheckPoint
//Gabriel Gomes



// 2 ͦ Checkpoint de programação imperativa
// Olá, você foi contratado para executar este projeto. É importante que você analise, entenda o pedido do cliente e desenvolva conforme solicitado. Veja abaixo os requisitos do projeto:

// - Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 

//       1 - Pipoca – 10 segundos (padrão);
//       2 - Macarrão – 8 segundos (padrão);
//       3 - Carne – 15 segundos (padrão);
//       4 - Feijão – 12 segundos (padrão);
//       5 - Brigadeiro – 8 segundos (padrão); 

// - O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
// - Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
// - Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
// - Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
// - No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".


function MenuMicroondas(comida, tempo){
    let tempoPadrao;

    switch(comida){
        case 1:
            comida = 'Pipoca'
            tempoPadrao = 10
            break;        
        case 2:
            comida = "Macarrão"
            tempoPadrao = 8
            break;
        case 3:
            comida = "Carne"
            tempoPadrao = 15
            break;
        case 4:
            comida = "Feijão"
            tempoPadrao = 12
            break;
        case 5:
            comida = "Brigadeiro"
            tempoPadrao = 8  
            break;
        default:
            return  'Prato inexistente'    
    };

    if(tempo < tempoPadrao){
        return `Tempo insuficiente`
    }else if(tempo >= 2*tempoPadrao && tempo < 3*tempoPadrao){
        return `Sua ${comida} queimou!`
    }else if(tempo >= 3*tempoPadrao){
        return "KABUMM!!"
    }else{
        return `${comida} está pronta, bom apetite!!!`
    };
};

//Entrada do cliente

console.log(MenuMicroondas(1, 10))
console.log(MenuMicroondas(2, 15))
console.log(MenuMicroondas(3, 6))
console.log(MenuMicroondas(4, 5))
console.log(MenuMicroondas(5, 4))
console.log(MenuMicroondas(6, 5))