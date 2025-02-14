/* Palidroma
 Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma
*/

// chiedere all'utente una parola // 
const parola = prompt("VERIFICA SE LA PAROLA È PALINDROMA")
// creo funzione e passo la parola //
function controlloParola(parola){
 //meccanismo di controllo palindroma//
 const caratteri = parola.split('');
 const invertita = caratteri.reverse().join('');
 // ritorno del risultato// 
 if (parola === invertita){
    console.log(parola + " è una parola palindroma ");
  }else {
    console.log(parola + " non è una parola palindroma ");   
  }
} 
 

// richiamo funzione e salvo risultato// 
controlloParola(parola)




















