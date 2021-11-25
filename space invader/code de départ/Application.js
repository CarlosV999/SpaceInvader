class Application
{
<<<<<<< HEAD
    constructor(window, vueMenu, jeuDAO, vueClassement, vueJeu, vueFinDuJeu, vueOption)
=======
    constructor(window, vueMenu, vueClassement, vueJeu, vueFinDuJeu, vueOption)
>>>>>>> 2fe598f8246f3f238bfcfeb95dff0f0e4fb8a534
    {
        this.window = window;
        this.vueMenu = vueMenu;
        this.vueJeu = vueJeu;
<<<<<<< HEAD
        this.jeuDAO = jeuDAO;
=======
>>>>>>> 2fe598f8246f3f238bfcfeb95dff0f0e4fb8a534
        this.vueFinDuJeu = vueFinDuJeu;
        this.vueClassement = vueClassement;
        this.vueOption = vueOption;
        //this.vueClassement.afficher();
        //this.vueFinDuJeu.afficher();
        this.vueJeu.afficher();

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
            this.vueJeu.afficher();
        }
      }



}

<<<<<<< HEAD
new Application(window, new VueMenu(), new JeuDAO, new VueClassement(), new VueJeu(), new VueFinDuJeu(), new VueOption());
=======
new Application(window, new VueMenu(), new VueClassement(), new VueJeu(), new VueFinDuJeu(), new VueOption());
>>>>>>> 2fe598f8246f3f238bfcfeb95dff0f0e4fb8a534
