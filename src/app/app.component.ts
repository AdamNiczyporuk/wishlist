import { Component } from '@angular/core';
import { WishItem } from '../Shared/models/wishitem';




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

 filter :any;

}

