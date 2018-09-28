import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DicasPage } from '../pages/dicas/dicas';

//Banco
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  //Tira o homapage
  rootPage:any 

  constructor(platform: Platform, 
              statusBar: StatusBar, 
              splashScreen: SplashScreen,
              ofAuth: AngularFireAuth) {
          //authState - estado
    const authObserver = ofAuth.authState.subscribe(users =>{
      if(users){ //Se tiver um usuário ele manda para dicasPage
        this.rootPage = DicasPage
        authObserver.unsubscribe()
      }else{ //Se não tiver
        this.rootPage = DicasPage
        authObserver.unsubscribe()
      }
    })
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

