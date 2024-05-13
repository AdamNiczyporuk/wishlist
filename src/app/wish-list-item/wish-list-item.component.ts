import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WishItem } from '../../Shared/models/wishitem';
import events from './../../Shared/services/EventServices';
@Component({
  selector: 'wish-list-item',
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.css',
})
export class WishListItemComponent implements OnInit {
  @Input() wishText!: string;

  @Input() fullfilled!: boolean;
  @Output() fullfilledChange = new EventEmitter<boolean>();

  get cssClasses() {
    //return this.fullfilled ? ['strikeout', 'text-muted']: [];

    return { 'strikeout text-muted': this.fullfilled };
  }

  constructor() {}

  ngOnInit(): void {}

  removeWish() {
     events.emit('remove', this.wishText)
  }

  toggelFullfilled() {
    this.fullfilled = !this.fullfilled;
    this.fullfilledChange.emit(this.fullfilled);
  }
}
