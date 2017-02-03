import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import { RegistrarPage } from '../registrar/registrar';
import { Credencial } from '../../model/credencial';
import { LoginProvider } from '../../providers/login-provider';
import { NoticiasPage } from '../noticias/noticias';
import { TabsPage } from '../tabs/tabs';
@Component({
  selector: 'login-page',
  templateUrl: 'login.html'
})
export class LoginPage {
	credencial:Credencial;

  	constructor(
  		public navCtrl: NavController,
        public loginProvider: LoginProvider,
        public menuCtrl: MenuController) {
    	this.initialize();
  	}

  	private initialize(){
    	this.credencial = new Credencial();
  	}

  	ionViewDidEnter(){
    	this.menuCtrl.enable(false);
    	this.menuCtrl.swipeEnable(false);
  	}

	ionViewDidLoad() {
	    this.loginProvider.loginSucessoEventEmitter.subscribe(
	      	user => {
	        	this.menuCtrl.enable(true);
	        	this.menuCtrl.swipeEnable(true);
	        	this.navCtrl.setRoot(TabsPage)
	      	}
	    );
	    this.loginProvider.loginFalhaEventEmitter.subscribe(
	      error => console.log(error)
	    )
	}

	loginComFacebook(){
	    this.loginProvider.loginComFacebook();
	}

  	loginComCredencial(){
    	this.loginProvider.loginComCredencial(this.credencial);
  	}
	
	sair(){
	    this.loginProvider.sair();
	}

	doRegister(){
	    this.navCtrl.push(RegistrarPage);
	}
}