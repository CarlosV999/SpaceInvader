class Application
{

    constructor(window, vueMenu, vueClassement)
    {
        this.window = window;
        this.vueMenu = vueMenu;
        this.vueClassement = vueClassement;
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

}

new Application(window, new VueMenu(), new VueClassement());