import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public authData: AuthProvider) {
  }

  logoutUser(){
  	this.authData.logoutUser().then( () => {
  		this.navCtrl.setRoot(LoginPage);
  	});
  }

}
