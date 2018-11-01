import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	user;
	name;
  constructor(public navCtrl: NavController,
  	private fAuth: AngularFireAuth) {

  }

  ionViewDidLoad() {
    this.user = this.fAuth.auth.currentUser;
    if (this.user!= null){
    	this.name = this.user.displayName;
    	console.log(this.name)
    }
  }
  cerrarSesion(){
  	this.fAuth.auth.signOut();
  }
}
