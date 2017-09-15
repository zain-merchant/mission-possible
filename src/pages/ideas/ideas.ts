import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-ideas',
  templateUrl: 'ideas.html',
})
export class IdeasPage {

  acts: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, db: AngularFireDatabase) {
  	this.acts = db.list('/acts');
  }

}
