import { Component, ViewChild } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { DicasPage } from '../dicas/dicas';
import { RegisterPage } from '../register/register';

import { AngularFireAuth } from 'angularfire2/auth';
import { Users } from './users';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //Instânciando um novo usuário
  users: Users = new Users()

  @ViewChild('usuario') email
  @ViewChild('senha') password

  constructor(public navCtrl: NavController, 
              public toastCtrl: ToastController, 
              public fire: AngularFireAuth) {

  }

  entrar() {
    let toast = this.toastCtrl.create({duration: 3000, position: 'bottom'})

    /*if(this.email.value == "keila" && this.password.value == "123"){
      this.navCtrl.push(DicasPage)
      toast.setMessage('Logado com sucesso!').present()
    }else{
      toast.setMessage('Usuário ou senha não encontrado!').present()
    }
    */

    this.fire.auth.signInWithEmailAndPassword(this.email.value, this.password.value)
    //Se der certo cai aqui no then
    .then( data => {
      console.log('data do login: ', data)
      this.users.email = this.email.value
      this.users.senha = this.password.value

      //setRoot - sem a setinha de voltar
      this.navCtrl.setRoot(DicasPage)
      toast.setMessage('Logado com sucesso!').present()

    })
    //Se der errado entra no catch
    .catch((error: any) => {

      if(error.code == 'auth/invalid-email'){
        toast.setMessage('Email inválido!')
      }else if(error.code == 'auth/user-disabled'){
        toast.setMessage('Esse usuário foi desativado.')
      }else if(error.code == 'auth/user-not-found'){
        toast.setMessage('Usuário não encontrado.')
      }else if(error.code == 'auth/wrong-password'){
        toast.setMessage('Senha errada')
      }
      toast.present()

    })
    }

  cadastrar() {
    this.navCtrl.push(RegisterPage)
  }

}
