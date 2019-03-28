import { Component, ViewChildren, QueryList } from '@angular/core';
import { Platform, ModalController, ActionSheetController, PopoverController, IonRouterOutlet, MenuController, ToastController  } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: "app-root",
  templateUrl: "app.component.html"
})
export class AppComponent {
  // set up hardware back button event.
  lastTimeBackPress = 0;
  timePeriodToExit = 2000;

  @ViewChildren(IonRouterOutlet) routerOutlets: QueryList<IonRouterOutlet>;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public modalCtrl: ModalController,
    private menu: MenuController,
    private actionSheetCtrl: ActionSheetController,
    private popoverCtrl: PopoverController,
    private router: Router,
    private toastController: ToastController
  ) {
    // Initialize app
    this.initializeApp();

    // Initialize BackButton Eevent.
    this.backButtonEvent();
  }

  // active hardware back button
  backButtonEvent() {
    this.platform.backButton.subscribe(async () => {
      // close action sheet
      try {
        const element = await this.actionSheetCtrl.getTop();
        if (element) {
          element.dismiss();
          return;
        }
      } catch (error) {}

      // close popover
      try {
        const element = await this.popoverCtrl.getTop();
        if (element) {
          element.dismiss();
          return;
        }
      } catch (error) {}

      // close modal
      try {
        const element = await this.modalCtrl.getTop();
        if (element) {
          element.dismiss();
          return;
        }
      } catch (error) {
        console.log(error);
      }

      // close side menua
      try {
        const element = await this.menu.getOpen();
        if (element !== null) {
          this.menu.close();
          return;
        }
      } catch (error) {}

      this.routerOutlets.forEach((outlet: IonRouterOutlet) => {
        if (outlet && outlet.canGoBack()) {
          outlet.pop();
        } else if (this.router.url === "/home") {
          if (
            new Date().getTime() - this.lastTimeBackPress <
            this.timePeriodToExit
          ) {
            // this.platform.exitApp(); // Exit from app
            navigator["app"].exitApp(); // work in ionic 4
          } else {
              this.presentToastWithOptions();

            this.lastTimeBackPress = new Date().getTime();
          }
        }
      });
    });
  }


  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      message: 'Click to Close',
      showCloseButton: true,
      position: 'middle',
      duration: 2000,
      closeButtonText: 'Done'
    });
    toast.present();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}