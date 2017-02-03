import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { LoginProvider } from '../../providers/login-provider';
import { Credencial } from '../../model/credencial';
import { LoginPage } from '../login/login';
import { NoticiasPage } from '../noticias/noticias';

@Component({
  selector: 'page-registrar',
  templateUrl: 'registrar.html'
})
export class RegistrarPage {
	credencial:Credencial;
	ionViewDidLoad() {
		this.credencial = new Credencial();
	  	this.loginProvider.loginSucessoEventEmitter.subscribe (
	  		user => this.navCtrl.setRoot(NoticiasPage)
	  	)
	  	this.loginProvider.loginFalhaEventEmitter.subscribe (
	  		erro => console.log(erro)
	  	)
	}
	constructor(
	  	public navCtrl: NavController, 
		public loginProvider: LoginProvider,
		public loadingCtrl: LoadingController) {
		this.credencial = new Credencial();
	}

	doRegister(){
		this.loginProvider.registrarUsuario(this.credencial);
		this.loadingCtrl.create({
			content: 'Por favor aguarde...',
			duration: 3000,
			dismissOnPageChange: true
		}).present();
		this.navCtrl.push(LoginPage);
	}
}
