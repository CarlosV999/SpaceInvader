class ClassementDAO{
    
    constructor(){
      this.listeClassement = [];
    }
    
      lister(){

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            document.getElementById("demo").innerHTML = xhttp.responseText;
          }
        };
        xhttp.open("GET", "filename", true);
        xhttp.send();

        /* var maxAge = 3000, timeout = 5000;

        var onSuccess = function(position) {
            console.log("Latitude: "+position.coords.latitude);
            console.log("Longitude: "+position.coords.longitude);
        };

        function onError(error) {
            console.log("Code: "+error.code);
            console.log("Message: "+error.message);
        };

        navigator.geolocation.getCurrentPosition(onSuccess, function(error) {
            console.log("Failed to retrieve high accuracy position - trying to retrieve low accuracy");
            navigator.geolocation.getCurrentPosition(onSuccess, onError, { maximumAge: maxAge, timeout: timeout, enableHighAccuracy: false });
        }, { maximumAge: maxAge, timeout: timeout, enableHighAccuracy: true }); */

        /*$(document).ready(function() {
          $.getJSON("https://www.devquora.com/test/json.php", function(result) {
              $.each(result, function(i, field) {
                  $("#output").append("Title: " + field.title + " duration: " + field.duration + " Price:" + field.price + "<br/>");
              });
          });
      });*/
        
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