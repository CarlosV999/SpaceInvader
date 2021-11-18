class Application
{

    constructor(window, vueMenu, vueClassement, vueOption, vueJeu, vueGameOver)
    {
        this.window = window;
        this.vueMenu = vueMenu;
        this.vueJeu = vueJeu;
        this.vueGameOver = vueGameOver;
        this.vueClassement = vueClassement;
        this.vueOption = vueOption;
        this.vueClassement.afficher();
        

        this.window.addEventListener("hashchange", () =>this.naviguer());
        this.naviguer();
        
    }

    naviguer(){
        let hash = window.location.hash;
    
        if(!hash){
            this.vueClassement.afficher();
        }
      }

    modifier(joueur)
    {
        
    }

}

new Application(window, new VueMenu(), new VueClassement(),new VueOption(), new VueJeu(), new VueGameOver());
