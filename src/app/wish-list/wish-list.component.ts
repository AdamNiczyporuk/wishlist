import { Component,OnInit,Input } from '@angular/core';
import { WishItem } from '../../Shared/models/wishitem';



@Component({
  selector: ' wish-list',
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.css'
})

export class WishListComponent implements OnInit {

  constructor(){}
  ngOnInit(): void {
    
  }

  @Input() wishes:WishItem[]= [];



  toggleItem(item:WishItem ){
    item.isComplete = !item.isComplete;
    console.log(item);
  }

}
