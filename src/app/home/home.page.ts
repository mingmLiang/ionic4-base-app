import { Component } from '@angular/core';
// import { Tab1 } from './tab1-page';
// import { Tab2 } from './tab2-page';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  tab1: any;
  tab2: any;

  constructor() {
    // this.tab1 = Tab1;
    // this.tab2 = Tab2;
  }
}
