import { Component, OnInit } from "@angular/core";
import { ConstantService } from "@shared/constants/constants.service";
import { HomePageService } from "./home.page.service";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
  providers: [HomePageService, ConstantService]
})
export class HomePage implements OnInit {
  dataList;
  typeArrList;
  TypeArr = this.constantService.getSupprotingData("TypeArr"); // 获取数据字典数据
  constructor(
    private homePageService: HomePageService,
    private constantService: ConstantService
  ) {}

  ngOnInit(): void {
    console.log(this.constantService.getSupprotingData("TypeArr"));
    // 测试请求失败，弹出提示，以及该请求不使用动画效果loading
    this.homePageService.test().subscribe(data => {
      console.log(data["RESULT"]);
    });

    this.homePageService.getType().subscribe(data => {
      this.typeArrList = data["RESULT"];
      if (this.typeArrList.length) {
        this.homePageService
          .getList(this.typeArrList[0])
          .subscribe(dataList => {
            this.dataList = dataList["RESULT"];
            console.log(dataList["RESULT"]);
          });
      }
    });
  }
}
