import { Component } from '@angular/core';
import { App } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { IdeasPage } from '../ideas/ideas';
import { ProfilePage } from '../profile/profile';
import { LoginPage } from '../login/login';
import { TasksPage } from '../tasks/tasks';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = IdeasPage;
  tab3Root = TasksPage;
  tab4Root = ProfilePage;

  constructor(public appCtrl: App) {

  }

  logout() {
    this.appCtrl.getRootNav().setRoot(LoginPage);
  }
}
