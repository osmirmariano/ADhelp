import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { InAppBrowser, Camera } from 'ionic-native';
import { DoacaoPage } from '../doacao/doacao';

@Component({
  selector: 'page-noticias',
  templateUrl: 'noticias.html'
})
export class NoticiasPage {
  public base64Image: string;

  constructor(public navCtrl: NavController, 
      public navParams: NavParams,
      public plt: Platform) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad NoticiasPage');
  }

  launch(url) {
        this.plt.ready().then(() => {
            open(url, "_blank", "location=no");
        });
    }
   
 chamadaDocao() {
    	this.navCtrl.push(DoacaoPage)
  }


  takePicture(){
    Camera.getPicture({
        destinationType: Camera.DestinationType.DATA_URL,
        targetWidth: 1000,
        targetHeight: 1000
    }).then((imageData) => {
      // imageData is a base64 encoded string
        this.base64Image = "data:image/jpeg;base64," + imageData;
    }, (err) => {
        console.log(err);
    });
  }
}
