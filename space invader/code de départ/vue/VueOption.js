class VueOption
{

    constructor()
    {
        this.html = document.getElementById("html-vue-option").innerHTML;
        this.modifierOption = null;
    }

    afficher()
    {

        document.getElementsByTagName("body")[0].innerHTML = this.html;

        document.getElementById("id").value = this.modifierOption.id;
        document.getElementById("musique").value = this.modifierOption.musique;
        document.getElementById("effets-sonores").value = this.modifierOption.effets;
        document.getElementById("nom").value = this.modifierOption.nom;

        document.getElementById("formulaire-option").addEventListener("submit", evenement => this.modifier(evenement));

    }

    modifier(evenement)
    {
        evenement.preventDefault();

        let id = document.getElementById("id").value;
        let musique = document.getElementById("musique").value;
        let effets = document.getElementById("effets-sonores").value;
        let nom = document.getElementById("nom").value

        this.modifierOption(new Joueur(id, null, nom, null, musique, effets));
    }

}