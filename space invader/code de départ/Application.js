class Application
{

    constructor(window, vueMenu, jeuDAO, vueClassement, vueOption, vueJeu, vueGameOver)
    {
        this.window = window;
        this.vueMenu = vueMenu;
        this.vueJeu = vueJeu;
        this.jeuDAO = jeuDAO;
        this.vueGameOver = vueGameOver;
        this.vueClassement = vueClassement;
        this.vueOption = vueOption;
        this.vueClassement.afficher();
        

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
            this.vueClassement.afficher();
        }
      }



}

new Application(window, new VueMenu(), new JeuDAO, new VueClassement(),new VueOption(), new VueJeu(), new VueGameOver());
