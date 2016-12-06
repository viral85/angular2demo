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

    onScrolled(yPos : number) {
        this.shrinkCssClass = yPos ? "shrink-header" : "";
        
        if(yPos > '644'){

            document.getElementsByClassName('sidebar')[0].style.position = "fixed";
			document.getElementsByClassName('sidebar')[0].style.top = "70px";
		}else{
			document.getElementsByClassName('sidebar')[0].style.position = "";
			document.getElementsByClassName('sidebar')[0].style.top = "";
		}
         if(yPos > '1540'){
            document.getElementsByClassName('sidebar')[0].style.display = "none";
         }else{
             document.getElementsByClassName('sidebar')[0].style.display = "block";
         }

    }

}
