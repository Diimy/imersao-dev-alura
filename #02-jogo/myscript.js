var numeroSecreto = parseInt(Math.random()*11);
var chances = 3;    

while(chances != 0){
    var chuteUser = prompt("Digite um número entre 0 e 10. Você possui " + chances + " chances");  
    if (chuteUser<numeroSecreto){
        chances = chances -  1 ;
        alert("Que pena, você errou! O número é maior.");
    }
    else if (chuteUser>numeroSecreto){
        chances = chances -  1 ;
        alert("Que pena, você errou! O número é menor.");
    }
    else if (chuteUser == numeroSecreto){
        alert("Parabéns, você acertou!O número era " + numeroSecreto);
        chances = 0;
    }
     
}

if(chances == 0 && chuteUser !=numeroSecreto){
    alert("Suas chances acabaram! O número era " + numeroSecreto);
}

    





