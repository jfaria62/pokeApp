import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  @Input() labelKey = 'label';
  @Input() idKey = 'id';
  @Input() pokemon = [];

  constructor() { }

  ngOnInit() {
    let x;
    let pokeName = [];
    for ( x = 1; x <= 150; x++) {
      this.pokemon[x] = x;
      //pokeName[x] =
    }
  }

}
