import { Component, OnInit } from '@angular/core';

import { HomePageService } from './home.page.service';

// import { Tab1 } from './tab1-page';
// import { Tab2 } from './tab2-page';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [HomePageService]
})
export class HomePage implements OnInit {
  tab1: any;
  tab2: any;

  constructor(private homePageService: HomePageService) {
    // this.tab1 = Tab1;
    // this.tab2 = Tab2;
  }

  ngOnInit(): void {
    this.homePageService.getType().subscribe((data) => {
      console.log(data);
    });
    this.homePageService.getList('gaoxiao').subscribe((data) => {
      console.log(data);
    });
  }
}
