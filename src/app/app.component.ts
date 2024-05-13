import { Component } from '@angular/core';
import { WishItem } from '../Shared/models/wishitem';
import events from './../Shared/services/EventServices';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  items: WishItem[]  = [
    new WishItem('To learn Angular'),
    new WishItem('To find cause',true),
    new WishItem('To find Money on the ground'),
  ]
  constructor() {
    events.listen('removeWish',(wish:any) =>{
      console.log(wish);
    })

  } 
 filter :any;

}

