import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Home';
  containerHeight:number=0;

  ngOnInit(){
    this.containerHeight= window.innerHeight-(100+60); // ContainerHeight= Window Inner Height - (Header + Footer)
  }
}
