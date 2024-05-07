import { Component } from '@angular/core';
import { WishItem } from '../Shared/models/wishitem';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  items: WishItem[]  = [
    new WishItem('To leatn Angular'),
    new WishItem('To find cause',true),
    new WishItem('To find Money on the ground'),
  ]

  listFilter:String = '0';
 

  newWishText ='';

  title = 'wishlist';

  visibleItems : WishItem[] = this.items;



 
  addNewWish()
  { 
    //Todo: add wish to items arrays
    //clear the textbox
    this.items.push(new WishItem(this.newWishText));
    this.newWishText = '';
  }

  filterChanged(value :any ){
       if(value =='0')
      { 
        this.visibleItems = this.items;  
      }
      else if(value =='1')
      { 
      this.visibleItems=this.items.filter(item => !item.isComplete)    
      }
      else
      {
        this.visibleItems=this.items.filter(item => item.isComplete)
      }
  }

  
  
   toggleItem(item:WishItem ){
    item.isComplete = !item.isComplete;
    console.log(item);
  }
}

