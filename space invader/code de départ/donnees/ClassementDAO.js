class ClassementDAO{
    
    constructor(){
      this.listeClassement = [];
    }
    
      lister(){
        
        for(let position in this.listeClassement){
          let joueur = new Joueur(this.listeClassement[position].id,
                                  this.listeClassement[position].position,
                                  this.listeClassement[position].nom,
                                  this.listeClassement[position].score);
    
          this.listeClassement[joueur.id] = joueur;
        }
    
        return this.listeClassement;
      }
    
      /*ajouter(voiture)
      {
        // il faut ici attribuer un id au voiture
        if(this.listeVoiture.length > 0)
          voiture.id = this.listeVoiture[this.listeVoiture.length-1].id + 1;
        else
          voiture.id = 0;
    
        this.listeVoiture[voiture.id] = voiture;
  
        localStorage['voiture'] = JSON.stringify(this.listeVoiture);
        console.log("JSON.stringify(this.listeVoiture) : " + JSON.stringify(this.listeVoiture));
      }
  
      modifier(voiture)
      {
        
        this.listeVoiture[voiture.id] = voiture;
  
        localStorage['voiture'] = JSON.stringify(this.listeVoiture);
        console.log("JSON.stringify(this.listeVoiture) : " + JSON.stringify(this.listeVoiture));
      }*/
}