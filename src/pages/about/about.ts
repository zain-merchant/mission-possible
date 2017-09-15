import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  
  acts: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, db: AngularFireDatabase) {
  	this.acts = db.list('/acts');
  }

}
