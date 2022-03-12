class VueFinDuJeu{
    constructor(vueJeu){
        this.vueJeu = vueJeu;
        this.html = document.getElementById("html-vue-fin-du-jeu").innerHTML;
    }

    afficher(){
      document.getElementsByTagName("body")[0].innerHTML = this.html;
        let score = 0 ;
        let record = 0 ;

        score = this.vueJeu.getPointage();
        console.log(score);
        document.getElementById('score').innerHTML = "Score: "+score;

      /*
      let listeScore = document.getElementById("container");
      const listeScoreItemHTML = listeScore.innerHTML;
      
      let listeScoreItemHTMLRemplacement = listeScoreItemHTML;
          listeScoreItemHTMLRemplacement = listeScoreItemHTMLRemplacement.replace("{FinDuJeu.record}",this.record);
          listeScoreItemHTMLRemplacement = listeScoreItemHTMLRemplacement.replace("{FinDuJeu.score}",this.score);

          listeScore.innerHTML = listeScoreItemHTMLRemplacement;
          */
       
    }


}