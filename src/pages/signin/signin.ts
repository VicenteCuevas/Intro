import { Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth'
import { TabsPage } from '../tabs/tabs'
/**
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {

		@ViewChild('email') email;
		@ViewChild('password') password;

  constructor(private fAuth: AngularFireAuth, private alertCtrl: AlertController
  	,public navCtrl: NavController, public navParams: NavParams) {
  }
  alertaError(mensaje){
  	this.alertCtrl.create({
  			title: 'Cuidado!',
  			subTitle: mensaje,
  			buttons: ['Entendido']
  		}).present();
  }

  signInToFirebaseButton(){
  	this.fAuth.auth.signInWithEmailAndPassword(this.email.value, this.password.value)
  	.then( () =>{
  		this.navCtrl.setRoot(TabsPage);
  	})
  	.catch( error =>{
  		this.alertaError(error.message)
  	})
  }
}
