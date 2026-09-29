function jouerDevinette (){
    const  secret = Math.floor(Math.random()*101);// entier  entre à et 100
    
    while (true){
        
        const saisie = prompt ("Devinez le nombre (0-100):");
        const proposition = Number(saisie);
        if (proposition === null ) 
            return false;
       const ecart = Math.abs(secret - proposition);

       if (ecart === 0){
        alert("Gagné")
       }
       else if(ecart <= 5) {
        alert("Chaud");
       }
       else if (ecart <=20){
        alert("Tiède")
       }
       else{
         alert("Froid")
       }
    }
    
}




function jouerQuiz() {
  let nombreQuestions = Number(prompt("Combien de questions voulez-vous ?"));
  let score = 0;

  // on fait des copies pour ne pas abîmer les listes d'origine
  let listePays = pays.slice();
  let listeCapitales = capitales.slice();

  for (let i = 0; i < nombreQuestions; i++) {
    // on tire une position au hasard dans ce qui reste
    let position = Math.floor(Math.random() * listePays.length);

    let reponse = prompt("Quelle est la capitale de : " + listePays[position] + " ?");

    if (reponse.toLowerCase() === listeCapitales[position].toLowerCase()) {
      score = score + 1;
      alert("Bonne réponse !");
    } else {
      alert("Faux, c'était : " + listeCapitales[position]);
    }

    // on retire la question posée : elle ne sera pas reposée
    listePays.splice(position, 1);
    listeCapitales.splice(position, 1);
  }

  alert("Votre score : " + score + " / " + nombreQuestions);
}





function main() {
  let rejouer = prompt("Choisissez : 1 - Réjouer \n 2 - Fin");
     
  while (rejouer === "1") {
    let choix = prompt("Choisissez un jeu :\n1 - Devinette\n2 - Quiz\n3 - Morpion");

    if (choix === "1") {
      jouerDevinette();
    } else if (choix === "2") {
      jouerQuiz();
    } else if (choix === "3") {
      jouerMorpion();
    } else {
      alert("Choix invalide");
    }

    rejouer = confirm("Voulez-vous rejouer ?");
  }
}
main();

function Morpion(){

}




