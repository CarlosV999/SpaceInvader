class VueClassement{
    constructor(){
      this.html = document.getElementById("html-vue-classement").innerHTML;
      this.listeClassementDonnee = [{position:"#1", nom:"Corvette", score:"199000", id:0},
                          {position:"#2", nom:"Tesla", score:"123523", id:1},
                          {position:"#3", nom:"Honda", score:"153238", id:2}]
    }

    afficher(){
        document.getElementsByTagName("body")[0].innerHTML = this.html;

        for(let positionListe in this.listeClassementDonnee){
            let classement = new Joueur(this.listeClassementDonnee[positionListe].id,
                                    this.listeClassementDonnee[positionListe].position,
                                    this.listeClassementDonnee[positionListe].nom,
                                    this.listeClassementDonnee[positionListe].score);
      
            this.listeClassementDonnee[classement.id] = classement;
          }

        let listeClassement = document.getElementById("container");
        const listeClassementItemHTML = listeClassement.innerHTML;
        let listeClassementHTMLRemplacement = "";
    
        for(var numeroClassement in this.listeClassementDonnee){
          let listeClassementItemHTMLRemplacement = listeClassementItemHTML;
          listeClassementItemHTMLRemplacement = listeClassementItemHTMLRemplacement.replace("{Classement.position}",this.listeClassementDonnee[numeroClassement].position);
          listeClassementItemHTMLRemplacement = listeClassementItemHTMLRemplacement.replace("{Classement.nom}",this.listeClassementDonnee[numeroClassement].nom);
          listeClassementItemHTMLRemplacement = listeClassementItemHTMLRemplacement.replace("{Classement.score}",this.listeClassementDonnee[numeroClassement].score);
          listeClassementHTMLRemplacement += listeClassementItemHTMLRemplacement;
        }
    
        listeClassement.innerHTML = listeClassementHTMLRemplacement;
      }
}