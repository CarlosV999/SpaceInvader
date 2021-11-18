class Application
{

    constructor(window, vueMenu, vueClassement, vueJeu, vueGameOver)
    {
        this.window = window;
        this.vueMenu = vueMenu;
        this.vueJeu = vueJeu;
        this.vueGameOver = vueGameOver;
        this.vueClassement = vueClassement;
        this.vueClassement.afficher();
        

        this.window.addEventListener("hashchange", () =>this.naviguer());
        this.naviguer();
        
    }

    naviguer(){
        let hash = window.location.hash;
    
        if(!hash){
            this.vueClassement.afficher();
        }
        else
        {
            this.vueClassement.afficher();
        }
      }

}


new Application(window, new VueMenu(), new VueClassement(), new VueJeu(), new VueGameOver());