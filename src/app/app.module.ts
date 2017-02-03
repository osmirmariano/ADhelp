import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DoacaoPage } from '../pages/doacao/doacao';
import { LoginPage } from '../pages/login/login';
import { NoticiasPage } from '../pages/noticias/noticias';
import { VoluntarioPage } from '../pages/voluntario/voluntario';
import { LoginProvider } from '../providers/login-provider';
import { RegistrarPage } from '../pages/registrar/registrar';
import { TabsPage } from '../pages/tabs/tabs';
import { AjudouPage } from '../pages/ajudou/ajudou';
import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBU4-HvcdQtaZikiRz5AOTQLfUW-bmFyNk",
    authDomain: "adhelp-920f0.firebaseapp.com",
    databaseURL: "https://adhelp-920f0.firebaseio.com",
    storageBucket: "adhelp-920f0.appspot.com",
    messagingSenderId: "941241186594"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DoacaoPage,
    LoginPage,
    NoticiasPage,
    VoluntarioPage,
    RegistrarPage,
    TabsPage,
    AjudouPage
  ],
  imports: [
    IonicModule.forRoot(MyApp, {tabsPlacement: 'top'})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DoacaoPage,
    LoginPage,
    NoticiasPage,
    VoluntarioPage,
    RegistrarPage,
    TabsPage,
    AjudouPage
  ],
  providers: [
    LoginProvider
  ]
})
export class AppModule {
  constructor(){
    firebase.initializeApp(firebaseConfig);
  }
}