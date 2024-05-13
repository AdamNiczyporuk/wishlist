import { Component,OnInit,Input,Output,EventEmitter } from '@angular/core';
import { WishItem } from '../../Shared/models/wishitem';

@Component({
  selector: 'wish-list-item',
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.css'
})
export class WishListItemComponent implements OnInit{

  @Input() wishText!: string;

  @Input() fullfilled! : boolean;
  @Output() fullfilledChange = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {

  }

  toggelFullfilled(){
    this.fullfilled =!this.fullfilled;
    this.fullfilledChange.emit(this.fullfilled);
  }

}
