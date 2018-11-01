import { Component } from '@angular/core';
import {FormBuilder, Validators, FormGroup } from '@angular/forms'
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth'
import { LoginPage } from '../login/login'
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

	
  myForm: FormGroup;
  user;

  constructor(private fAuth: AngularFireAuth,
  	public navCtrl: NavController, 
    public navParams: NavParams,
    public fBlder: FormBuilder,
    private aCntrl: AlertController) {


    this.myForm = this.createForm();
    

  }

  private createForm(){
    return this.fBlder.group({
      name: ['', Validators.required],
      lastname:['', Validators.required],
      email: ['',[Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]

    });
  }

  registerToFirebase(){
    this.fAuth.auth.createUserWithEmailAndPassword(this.myForm.controls.email.value, this.myForm.controls.password.value)
    .then(data =>{
      this.user = this.fAuth.auth.currentUser;
      this.user.updateProfile({
        displayName: this.myForm.controls.name.value+' '+this.myForm.controls.lastname.value
      }).then(success =>{
        this.aCntrl.create({
        title: 'Bienvenido!',
        subTitle: 'Tu cuenta ha sido creada exitosamente. Por favor ingresa de nuevo.',
        buttons: ['OK']
      }).present();
      });
      this.fAuth.auth.signOut();
      this.navCtrl.setRoot(LoginPage);
    }).catch(error =>{
      this.aCntrl.create({
        title: 'Cuidado!',
        subTitle: 'Algo ha sucedido. '+error.message,
        buttons: ['OK']
      }).present()
    })
  }
  

}
