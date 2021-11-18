class Application
{

    constructor(window, vueMenu, vueClassement, vueOption)
    {
        this.window = window;
        this.vueMenu = vueMenu;
        this.vueClassement = vueClassement;
        this.vueOption = vueOption;
        this.vueClassement.afficher();
        

        this.window.addEventListener("hashchange", () =>this.naviguer());
        this.naviguer();
        
    }

    naviguer(){
        let hash = window.location.hash;
    
        if(!hash){
            this.vueMenu.afficher();
        }
        else
        {
            this.vueMenu.afficher();
        }
      }

    modifier(joueur)
    {
        
    }

}

new Application(window, new VueMenu(), new VueClassement(), new VueOption());