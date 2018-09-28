import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth'
import { HomePage } from '../home/home'
/**
 * Generated class for the DicasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dicas',
  templateUrl: 'dicas.html',
})
export class DicasPage {

  email: string

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public fire: AngularFireAuth,
              public toastCtrl: ToastController) {
    this.email = fire.auth.currentUser.email //Pega o email do usuário logado e coloca em email
    //this.nome = fire.auth.currentUser.displayName //pega o nome de usuário, como não tem nenhum, vem null
  }

  logout(){
    let toast = this.toastCtrl.create({ duration: 2000, position: 'botom'})
    this.fire.auth.signOut()
    toast.setMessage('Deslogado com sucesso!').present()

    this.navCtrl.setRoot(HomePage)
  }

}
