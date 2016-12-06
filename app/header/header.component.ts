import { Component } from '@angular/core';
import { TrackScrollDirective } from '../directives/trackscroll.directive';

@Component({
    selector:'my-header',
    templateUrl: 'app/header/header.component.html',
    styleUrls: ['app/header/header.component.css'],
    directives: [TrackScrollDirective]
})

export class HeaderComponent{
    shrinkCssClass : string = '';
    cssStringClass : string = 'abc';
     sdegree : number = 0;
    onScrolled(yPos : number) {
      
        this.shrinkCssClass = yPos ? "shrink-header" : "";

         
        if(yPos > '644'){
        document.getElementById('sidebar').setAttribute("style", "position:fixed;  top:70px");
          
        }
         if(yPos > '1538'){
            this.sdegree +=3 ;
            
             this.translate = 'translateY(-'+this.sdegree+'px)';
           console.log();

            document.getElementById('sidebar').setAttribute("style", "position:absolute; right:45px; margin-top:890px;");

        }
        if(yPos < '644'){
         document.getElementById('sidebar').removeAttribute('style');
        }
        

    }

}
