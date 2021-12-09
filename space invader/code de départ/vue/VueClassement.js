class VueClassement{
    constructor(){
      this.html = document.getElementById("html-vue-classement").innerHTML;
      this.listeClassementDonnee = [{position:"#1", nom:"SuperGeorge", score:"199000", id:0},
                          {position:"#2", nom:"TheLegend27", score:"123523", id:1},
                          {position:"#3", nom:"ItsMeMario", score:"153238", id:2},
                          {position:"#4", nom:"BenOui", score:"174231", id:3},
                          {position:"#5", nom:"SpomalSaQuierSa", score:"295231", id:4},
                          {position:"#6", nom:"LaVieEnBlanc", score:"892052", id:5},
                          {position:"#7", nom:"UnPseudo", score:"724062", id:6},
                          {position:"#8", nom:"ShiftingGhost", score:"552054", id:7},
                          {position:"#9", nom:"LuigiIsBetter", score:"242502", id:8},
                          {position:"#10", nom:"RollingInTheDeep", score:"998231", id:9}]
    }

    /*initialiserListeClassement(listeClassementDonnee){
      this.listeClassementDonnee = listeClassementDonnee;
  }*/

    afficher(){
        document.getElementsByTagName("body")[0].innerHTML = this.html;

        /*for(let positionListe in this.listeClassementDonnee){
            let classement = new Joueur(this.listeClassementDonnee[positionListe].id,
                                    this.listeClassementDonnee[positionListe].position,
                                    this.listeClassementDonnee[positionListe].nom,
                                    this.listeClassementDonnee[positionListe].score);
      
            this.listeClassementDonnee[classement.id] = classement;
          }*/

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