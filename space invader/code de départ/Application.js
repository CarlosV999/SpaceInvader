class Application
{

<<<<<<< HEAD
    constructor(window, vueMenu, vueClassement, vueOption)
=======
    constructor(window, vueMenu, vueClassement, vueJeu, vueGameOver)
>>>>>>> 24a052af96ef7346cbd8509ec4ee8bab9d194de9
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

<<<<<<< HEAD
new Application(window, new VueMenu(), new VueClassement(), new VueOption());
=======

new Application(window, new VueMenu(), new VueClassement(), new VueJeu(), new VueGameOver());
>>>>>>> 24a052af96ef7346cbd8509ec4ee8bab9d194de9
