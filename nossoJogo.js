const isIniciarRodada = confirm("Quer iniciar uma nova rodada?")

if (isIniciarRodada){
   //Sortear as cartas (duas para cada)
   //comparar valores
   //console log vencedor ou empate

   console.log (" B O A S Vindas ao jogo BlackJack")
   const carta1Jog = comprarCarta()
   const carta2Jog = comprarCarta()
   console.log ("Carta Jogador : " + carta1Jog.texto + "  " + carta2Jog.texto)
   const totalJogador = carta1Jog.valor + carta2Jog.valor
   console.log("Total Jogador : " + totalJogador)
   const carta1Comp = comprarCarta()
   const carta2Comp = comprarCarta()
   console.log ("Carta Commputador : " + carta1Comp.texto + "  " + carta2Comp.texto)

   const totalComp = carta1Comp.valor + carta2Comp.valor
   console.log("Total Computador : " + totalComp)


  if (totalJogador > totalComp){
   console.log ("Jogador venceu!")
  }else if (totalComp > totalJogador){
   console.log ("Computador venceu!")
  }else{
   console.log ("Houve um empate")

  }
}else{
   console.log("Jogo acabou")

}































/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */


