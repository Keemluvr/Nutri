import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DicasPage } from '../pages/dicas/dicas';
import { RegisterPage } from '../pages/register/register';

//Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

const firebaseAuth = {
  apiKey: "AIzaSyDQjtm_eDqUyHe9-8ucBE-5udWxkLVZKBc",
  authDomain: "nutri-f5037.firebaseapp.com",
  databaseURL: "https://nutri-f5037.firebaseio.com",
  projectId: "nutri-f5037",
  storageBucket: "nutri-f5037.appspot.com",
  messagingSenderId: "487369260308"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DicasPage,
    RegisterPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DicasPage,
    RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
