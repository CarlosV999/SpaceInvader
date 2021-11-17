class VueMenu{
    constructor(){
      this.html = document.getElementById("html-vue-menu").innerHTML;
    }

    afficher(){
        document.getElementsByTagName("body")[0].innerHTML = this.html;
      }
}