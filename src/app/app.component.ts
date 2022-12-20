import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isShow : boolean = false;

  skills = [
    {Key : 'ANGULAR', value: 90},
    {Key : '.NET', value: 90},
    {Key : 'REACT', value: 90},
    {Key : 'PRIMENG', value: 90},
    {Key : 'JAVASCRIPT', value: 90},
    {Key : 'TYPESCRIPT', value: 90},
    {Key : 'SQL', value: 90},
    {Key : 'C#', value: 90},
  ]

  OnMobileView(icon: HTMLElement){
    if(this.isShow){
      icon.classList.remove('mobile-nav-active')
      this.isShow = false;
    }
    else{
      icon.classList.add('mobile-nav-active');
      this.isShow = true;
    }
  }

  setProgressBar(id:HTMLElement){
    
  }

}
