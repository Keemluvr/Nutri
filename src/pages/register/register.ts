import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { DicasPage } from '../dicas/dicas';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  @ViewChild('usuario') email
  @ViewChild('senha') password

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public fire: AngularFireAuth,
              public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  registrar() {

    let toast = this.toastCtrl.create({duration: 2000, position: 'bottom'})
    //Como ele é uma promisse ele devolve um then(caso de sucesso)
    this.fire.auth.createUserWithEmailAndPassword(this.email.value, this.password.value)
    .then( data => {
      //Chamar próxima página logado!
      console.log('Aqui temos a data: ', data)
      toast.setMessage('Usuário criado com sucesso!')
      //Não irá aparecer a setinha de voltar
      this.navCtrl.setRoot(DicasPage)
    }).catch(( error : any )=>{
      //Caso de erro
      if(error.code == 'auth/email-already-in-use'){
        toast.setMessage('Email digitado já está em uso!')
      }else if(error.code == 'auth/invalid-email'){
        toast.setMessage('O email digitado não é válido.')
      }else if(error.code == 'auth/operation-not-allowed'){
        toast.setMessage('Não está habilitado criar usúarios.')
      }else if(error.code == 'auth/weak-password'){
        toast.setMessage('Senha muito fraca')
      }
    })
    toast.present()
  }


}
