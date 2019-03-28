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
  dataList = [
    {
      commentNum: "5053",
      publishTime: "3月27日 19:29",
      forwardNum: "1286",
      praisedNum: "115486",
      blogger: "何炅",
      img_list: [
        "https://wx4.sinaimg.cn/thumb180/473dc466ly1g1hkv3td63j21sc2ds4qw.jpg"
      ],
      video: null,
      id: "1195230310-HmSM78mgm",
      page: 1,
      title: "新节目很顺利，有点儿开心，有点儿期待。",
      bloggerId: "L2hlamlvbmc/ZnJvbT1mZWVkJmxvYz1uaWNrbmFtZQ%3D%3D"
    },
    {
      commentNum: "6251",
      publishTime: "今天 09:26",
      forwardNum: "28550",
      praisedNum: "15251",
      blogger: "佘詩曼Charmaine",
      img_list: [
        "https://ww4.sinaimg.cn/thumb180/675ea4f4ly1g1i8oa2j6hj21sc2dsqv5.jpg",
        "https://ww4.sinaimg.cn/thumb180/675ea4f4ly1g1i8obrf2xj210i1iqn0a.jpg",
        "https://ww4.sinaimg.cn/thumb180/675ea4f4ly1g1i8oak9gnj20v90um11p.jpg",
        "https://ww4.sinaimg.cn/thumb180/675ea4f4ly1g1i8oe8k76j21sc2ds1kx.jpg"
      ],
      video: null,
      id: "1734255860-HmYfY3nRa",
      page: 1,
      title:
        "跑男呀..跑男..你們真利害！已經過了三天了，我還是渾身酸痛，四肢無力，卻又讓我回味無窮[笑而不語]#跑男 佛山##奔跑吧#開心難忘的一天佘诗曼",
      bloggerId: "L2NoYXJtYWluZXNoZWg/ZnJvbT1mZWVkJmxvYz1uaWNrbmFtZQ%3D%3D"
    },
    {
      commentNum: "5304",
      publishTime: "3月27日 18:00",
      forwardNum: "13049",
      praisedNum: "36636",
      blogger: "马思纯",
      img_list: [
        "https://wx1.sinaimg.cn/thumb180/679f6337ly1g1hi96pbm5j2300200u15.jpg"
      ],
      video: null,
      id: "1738498871-HmScd9UNp",
      page: 1,
      title:
        "马思纯你很优秀，快瘦成蜡像了。马二纯你好，希望你的笑同样属于我。@上海杜莎夫人蜡像馆",
      bloggerId: "L3NhbmRyYTAzMTQ/ZnJvbT1mZWVkJmxvYz1uaWNrbmFtZQ%3D%3D"
    },
    {
      commentNum: "2915",
      publishTime: "3月27日 15:24",
      forwardNum: "13502",
      praisedNum: "7169",
      blogger: "八组今天安利什么",
      img_list: [
        "https://ww4.sinaimg.cn/thumb180/006NTzmogy1g1hdqri765j30u00s3h0z.jpg",
        "https://ww4.sinaimg.cn/thumb180/006NTzmogy1g1hdqrt877j30u00qzaoi.jpg",
        "https://ww4.sinaimg.cn/thumb180/006NTzmogy1g1hdqs2rscj30u00qj000.jpg",
        "https://ww4.sinaimg.cn/thumb180/006NTzmogy1g1hdqsgoywj30u00rik8t.jpg"
      ],
      video: null,
      id: "6234081424-HmRaxFLmb",
      page: 1,
      title:
        "〈  (*Ü*)ﾉ☀滚滚到底是什么绝世小可爱呀!!! 〉点击就看，性感国宝，在线叉腰#大熊猫叉小蛮腰#",
      bloggerId: "L3UvNjIzNDA4MTQyND9mcm9tPWZlZWQmbG9jPW5pY2tuYW1l"
    },
    {
      commentNum: "6168",
      publishTime: "3月27日 19:34",
      forwardNum: "2869",
      praisedNum: "34616",
      blogger: "吳青峰",
      img_list: [
        "https://wx1.sinaimg.cn/thumb180/6ca5a984ly1g1hl0ffm5uj209r08jn08.jpg"
      ],
      video: null,
      id: "1822796164-HmSOblHy7",
      page: 1,
      title:
        "在機場被陌生人搭話，竟然是設計好的偷拍還變成節目，完全不知情地播出。只覺得，以後大概跟任何陌生人說話都會更害怕了吧…（再次配上我最愛的白爛貓的圖）",
      bloggerId: "L3UvMTgyMjc5NjE2ND9mcm9tPWZlZWQmbG9jPW5pY2tuYW1l"
    },
    {
      commentNum: "2045",
      publishTime: "今天 10:22",
      forwardNum: "1661",
      praisedNum: "7486",
      blogger: "新浪视频",
      img_list: [
        "https://n.sinaimg.cn/news/transform/703/w450h253/20190328/MgSo-hutwezh3669741.png"
      ],
      video: null,
      id: "1640601392-HmYCqplTf",
      page: 1,
      title:
        "【#大壮被央视点名是老赖#：去外地演出买不了高铁票飞机票】3月26日，央视社会与法频道《庭审现场》节目播出的内容是关于网红歌手变身老赖的故事。而这个网红歌手是《我们不一样》而红遍大江南北的大壮（王轩）。2017年6月，当大壮兴冲冲地用手机订购高铁票准备去外地演出时，却突然发现自自己无 ...展开全文c",
      bloggerId: "L3ZpZGVvP2Zyb209ZmVlZCZsb2M9bmlja25hbWU%3D"
    },
    {
      commentNum: "2209",
      publishTime: "3月27日 17:46",
      forwardNum: "16252",
      praisedNum: "8066",
      blogger: "锦鲤大王",
      img_list: [
        "https://wx3.sinaimg.cn/thumb180/d90d1513gy1g1helpwu65j20wt0omtc4.jpg"
      ],
      video: null,
      id: "3641513235-HmS69iBZe",
      page: 1,
      title: "未来三天将水逆得不得了的几大星座，转发转逆",
      bloggerId: "L3UvMzY0MTUxMzIzNT9mcm9tPWZlZWQmbG9jPW5pY2tuYW1l"
    }
  ];
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
            if (dataList["RESULT"] && dataList["RESULT"].length) {
              this.dataList = dataList["RESULT"];
            }
            console.log(dataList["RESULT"]);
          });
      }
    });
  }
}
