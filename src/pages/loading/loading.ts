import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth'
import { TabsPage } from '../tabs/tabs';
import { LoginPage } from '../login/login';

/**
 * Generated class for the LoadingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-loading',
  templateUrl: 'loading.html',
})
export class LoadingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
  	private fAuth: AngularFireAuth) {
  }

  ionViewDidLoad() {
  	this.fAuth.auth.onAuthStateChanged(user =>{
  		if(user){
  			this.navCtrl.setRoot(TabsPage);
  		}else{
  			this.navCtrl.setRoot(LoginPage);
  		}
  	})
  }

}
