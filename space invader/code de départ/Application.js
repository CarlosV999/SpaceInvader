class Application
{
    constructor(window, vueMenu, vueClassement, vueJeu, vueFinDuJeu, vueOption)
    {
        this.window = window;
        this.vueMenu = vueMenu;
        this.vueJeu = vueJeu;
        this.vueFinDuJeu = vueFinDuJeu;
        this.vueClassement = vueClassement;
        this.vueOption = vueOption;
        //this.vueClassement.afficher();
        this.vueFinDuJeu.afficher();
        

        this.window.addEventListener("hashchange", () =>this.naviguer());
        this.naviguer();
        
    }

    naviguer(){
        let hash = window.location.hash;
    
        if(!hash){
            this.vueFinDuJeu.afficher();
            //this.vueClassement.afficher();
        }
      }

    modifier(joueur)
    {
        
    }

}

new Application(window, new VueMenu(), new VueClassement(), new VueJeu(), new VueFinDuJeu(), new VueOption());