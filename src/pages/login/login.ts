import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SigninPage } from '../signin/signin'
import { RegisterPage } from '../register/register'


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  
  }

  signInButton(){
  	this.navCtrl.push(SigninPage);
  }
  registerButton(){
  	this.navCtrl.push(RegisterPage);
  }

}
