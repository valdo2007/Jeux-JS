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

    if (reponse === listeCapitales[position]) {
      score ++;
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












function afficherPlateau(plateau) {
    console.log("");
    console.log(plateau[0] + " | " + plateau[1] + " | " + plateau[2]);
    console.log("---------");
    console.log(plateau[3] + " | " + plateau[4] + " | " + plateau[5]);
    console.log("---------");
    console.log(plateau[6] + " | " + plateau[7] + " | " + plateau[8]);
    console.log("");
}


function aGagne(plateau, joueur) {

    if (plateau[0] === joueur && plateau[1] === joueur && plateau[2] === joueur) {
        return true;
    }

    if (plateau[3] === joueur && plateau[4] === joueur && plateau[5] === joueur) {
        return true;
    }

    if (plateau[6] === joueur && plateau[7] === joueur && plateau[8] === joueur) {
        return true;
    }

    if (plateau[0] === joueur && plateau[3] === joueur && plateau[6] === joueur) {
        return true;
    }

    if (plateau[1] === joueur && plateau[4] === joueur && plateau[7] === joueur) {
        return true;
    }

    if (plateau[2] === joueur && plateau[5] === joueur && plateau[8] === joueur) {
        return true;
    }

    if (plateau[0] === joueur && plateau[4] === joueur && plateau[8] === joueur) {
        return true;
    }

    if (plateau[2] === joueur && plateau[4] === joueur && plateau[6] === joueur) {
        return true;
    }

    return false;
}


function jouerMorpion() {

    let plateau = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    let joueur1 = prompt("Nom du joueur 1 :");
    let joueur2 = prompt("Nom du joueur 2 :");

    let joueur = "X";
    let tour = 0;
    let partieFinie = false;

    console.log("");
    console.log(joueur1 + " = X");
    console.log(joueur2 + " = O");
    console.log("");

    while (partieFinie === false) {

        afficherPlateau(plateau);

        let nomJoueur;

        if (joueur === "X") {
            nomJoueur = joueur1;
        } else {
            nomJoueur = joueur2;
        }

        let choix = Number(
            prompt(nomJoueur + " (" + joueur + "), choisissez une case de 1 à 9 :")
        );

        if (choix < 1 || choix > 9 || isNaN(choix)) {
            console.log("Veuillez choisir un numéro entre 1 et 9.");
            continue;
        }

        if (plateau[choix - 1] === "X" || plateau[choix - 1] === "O") {
            console.log("Cette case est déjà occupée.");
            continue;
        }

        plateau[choix - 1] = joueur;

        tour++;

        if (aGagne(plateau, joueur)) {

            afficherPlateau(plateau);
            console.log(nomJoueur + " a gagné !");
            partieFinie = true;

        } else if (tour === 9) {

            afficherPlateau(plateau);
            console.log("Match nul !");
            partieFinie = true;

        } else {

            if (joueur === "X") {
                joueur = "O";
            } else {
                joueur = "X";
            }
        }
    }
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






