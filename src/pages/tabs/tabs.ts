import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NoticiasPage } from '../noticias/noticias'
import { AjudouPage } from '../ajudou/ajudou';


@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root: any = NoticiasPage;
  tab2Root: any = AjudouPage;

  constructor(public navCtrl: NavController) {

  }

}