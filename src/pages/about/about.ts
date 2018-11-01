import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner'
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController,
  	private codeScanner: BarcodeScanner,
  	private alertCntrller: AlertController) {

  }
  escanear(){
  	this.codeScanner.scan()
  	.then(barcodeData=>{
  		console.log(barcodeData);
  		this.alertCntrller.create({
  			title: 'Tu codigo es:',
  			subTitle:'asd',
  			buttons: ['OK']
  		}).present();
  	}).catch(barcodeError=>{
  		console.log(barcodeError);
  	})
  }
}
