class VueFinDuJeu{
    constructor(){
        this.html = document.getElementById("html-vue-fin-du-jeu").innerHTML;
        this.score = "2053";
        this.record = "5875";
    }

    afficher(){
      document.getElementsByTagName("body")[0].innerHTML = this.html;

      let score = document.getElementById("container");
      const listeClassementItemHTML = score.innerHTML;
      let listeClassementHTMLRemplacement = "";
    }


}