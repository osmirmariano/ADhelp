import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { DoacaoPage } from '../doacao/doacao';
@Component({
  selector: 'page-ajudou',
  templateUrl: 'ajudou.html'
})
export class AjudouPage {

  constructor(public navCtrl: NavController, 
      public navParams: NavParams,
      public plt: Platform) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AjudouPage');
  }

  launch(url) {
        this.plt.ready().then(() => {
            open(url, "_blank", "location=no");
        });
    }

   chamadaDocao() {
    	this.navCtrl.push(DoacaoPage)
  }

}
