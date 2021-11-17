class Application
{

    constructor(window, vueMenu, vueClassement)
    {
        this.window = window;
        
        

        this.window.addEventListener("hashchange", () =>this.naviguer());
        this.naviguer();
        
    }

    /*naviguer(){
        let hash = window.location.hash;
    
        if(!hash){
    
         
    
        }else if(){
    
          
    
        }
        else if(hash.match()
        {
          
          
        }
        else{
        
        }
      }*/

}

new Application(window, new VueMenu(), new VueClassement());