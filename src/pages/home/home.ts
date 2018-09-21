import { Component, ViewChild } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { DicasPage } from '../dicas/dicas';
import { RegisterPage } from '../register/register';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('usuario') email
  @ViewChild('senha') password

  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {

  }

  entrar() {
    let toast = this.toastCtrl.create({duration: 3000, position: 'bottom'})

    if(this.email.value == "keila" && this.password.value == "123"){
      this.navCtrl.push(DicasPage)
      toast.setMessage('Logado com sucesso!').present()
    }else{
      toast.setMessage('Usuário ou senha não encontrado!').present()
    }
  }

  cadastrar() {
    this.navCtrl.push(RegisterPage)
  }

}
