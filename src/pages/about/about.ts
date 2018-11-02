import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner'
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
	options: BarcodeScannerOptions;
  constructor(public navCtrl: NavController,
  	private Scanner: BarcodeScanner,
  	private alertCntrller: AlertController) {

  }
  escanear(){
		this.options = {
			prompt: 'Escanea el codigo de barra.'
		};
  	this.Scanner.scan(this.options)
  	.then((data)=>{
  		console.log(data);
  		this.alertCntrller.create({
  			title: 'Tu codigo es:',
  			subTitle:data.text,
  			buttons: ['OK']
  		}).present();
  	}, (err) => {
			this.alertCntrller.create({
				title: 'Ha ocurrido un error',
				subTitle: 'Por favor intentalo de nuevo',
				buttons: ['OK']
			})
		})
  }
}
