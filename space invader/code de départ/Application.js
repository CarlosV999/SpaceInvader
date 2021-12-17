class Application
{
    constructor(window, classementDAO, vueMenu, jeuDAO, vueClassement, vueJeu, vueFinDuJeu, vueOption)
    {
        this.window = window;
        this.vueMenu = vueMenu;
        this.vueJeu = vueJeu;
        this.jeuDAO = jeuDAO;
        this.vueFinDuJeu = vueFinDuJeu;
        this.vueClassement = vueClassement;
        this.classementDAO = classementDAO;
        this.vueOption = vueOption;
        this.vueMenu.afficher();
        /*this.vueClassement.initialiserListeClassement(this.classementDAO.lister());
        this.vueClassement.afficher();*/
        //this.vueClassement.afficher();
        //this.vueFinDuJeu.afficher();
        //this.vueJeu.afficher();

        //this.window.addEventListener("hashchange", () =>this.naviguer());
        
        //this.naviguer();

        document.addEventListener('deviceready', () =>this.initialiserNavigation(), false);
        
    }

    initialiserNavigation(){
        console.log("Application-->initialiserNaviguation");
        this.window.addEventListener("hashchange", ()=>this.naviguer());

        setTimeout(() =>this.naviguer(), 3000);
    }
    
    actionModifierOption(joueur)
    {
        this.jeuDAO.modifier(joueur);
        this.window.location.hash = "#";
    }

    naviguer(){
        let hash = window.location.hash;
        console.log(hash);
        if(!hash){
            //this.vueFinDuJeu.afficher();
            //this.vueClassement.afficher();
            this.vueMenu.afficher();
            
        }
        else if(hash.match(/^#jouer/)){
    
            this.vueJeu.afficher();
            this.vueJeu.jouer();
      
          }
          else if(hash.match(/^#options/))
          {
            this.vueOption.afficher();
          }
          else if(hash.match(/^#classement/))
          {
            this.vueClassement.afficher();
          }
          /*
          else if(hash.match(/^#menu/))
          {
            this.vueMenu.afficher();
          }
          */
      }



}

new Application(window, new ClassementDAO(), new VueMenu(), new JeuDAO(), new VueClassement(), new VueJeu(), new VueFinDuJeu(), new VueOption());
