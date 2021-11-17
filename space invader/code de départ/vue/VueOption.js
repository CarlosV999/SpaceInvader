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

        document.getElementById("musique").value = this.modifierOption.musique;
        document.getElementById("effets-sonores").value = this.modifierOption.effets;
        document.getElementById("pseudo").value = this.modifierOption.pseudo;

        document.getElementById("formulaire-option").addEventListener("submit", evenement => this.modifier(evenement));

    }

    modifier(option)
    {



    }

}