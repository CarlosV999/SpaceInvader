class Application
{
    constructor(window, vueMenu, jeuDAO, vueClassement, vueJeu, vueFinDuJeu, vueOption)
    {
        this.window = window;
        this.vueMenu = vueMenu;
        this.vueJeu = vueJeu;
        this.jeuDAO = jeuDAO;
        this.vueFinDuJeu = vueFinDuJeu;
        this.vueClassement = vueClassement;
        this.vueOption = vueOption;
        this.vueMenu.afficher();
        //this.vueClassement.afficher();
        //this.vueFinDuJeu.afficher();
        //this.vueJeu.afficher();

        this.window.addEventListener("hashchange", () =>this.naviguer());
        this.naviguer();
        
    }

    actionModifierOption(joueur)
    {
        this.jeuDAO.modifier(joueur);
        this.window.location.hash = "#";
    }

    naviguer(){
        let hash = window.location.hash;
    
        if(!hash){
            //this.vueFinDuJeu.afficher();
            //this.vueClassement.afficher();
            this.vueMenu.afficher();
        }
        else if(hash.match(/^#jouer/)){
    
            this.vueJeu.afficher();
      
          }
          else if(hash.match(/^#options/))
          {
            this.vueOption.afficher();
          }
      }



}

new Application(window, new VueMenu(), new JeuDAO(), new VueClassement(), new VueJeu(), new VueFinDuJeu(), new VueOption());
