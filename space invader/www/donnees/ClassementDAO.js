class ClassementDAO{
    
  constructor(){
    this.listeClassement = [];
  }

  lister(actionReceptionClassement)
  {
          var xhttp = new XMLHttpRequest();

          xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
              // Typical action to be performed when the document is ready:
              //document.getElementById("demo").innerHTML = xhttp.responseText;
              console.log(xhttp.responseText);

              actionReceptionClassement(JSON.parse(xhttp.responseText));
            }
          };
          xhttp.open("GET", "https://blog.piedplat.com/listerJoueurJSON.php", true);
          xhttp.send();
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