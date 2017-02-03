import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { NoticiasPage } from '../noticias/noticias';

@Component({
  selector: 'page-doacao',
  templateUrl: 'doacao.html'
})
export class DoacaoPage {

  constructor(public navCtrl: NavController, 
      public navParams: NavParams,
      public alerCtrl: AlertController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad DoacaoPage');
  }

  codigoDoar() {
        let confirm = this.alerCtrl.create({
            title: '00031',
            subTitle:'Apresente este código no caixa',

            buttons: [
            {
                text: 'Ok',
                handler: () => {
                    console.log('Fechado com sucesso!');
                    this.navCtrl.setRoot(NoticiasPage);
                }
            }
            ]
        });
        confirm.present()
    }
}
