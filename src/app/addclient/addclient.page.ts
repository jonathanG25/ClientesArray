import { Component, Input, OnInit } from '@angular/core';

import { AlertController, ModalController } from '@ionic/angular';



@Component({
  selector: 'app-addclient',
  templateUrl: './addclient.page.html',
  styleUrls: ['./addclient.page.scss'],
})
export class AddclientPage implements OnInit {

  @Input()foto: string;
  @Input()nombre: string;
  @Input()celular: string;
  @Input()direccion: string;
  
  constructor(
    public modalController: ModalController,
    public alertController: AlertController
    ) { }

  ngOnInit() {
  }
  cerrarModal(){
    this.modalController.dismiss(); 
  }
  guardarDatos(){
    var name =(<HTMLInputElement>document.getElementById("txtnombre")).value;
    var foto =(<HTMLInputElement>document.getElementById("txtfoto")).value;
    var celular =(<HTMLInputElement>document.getElementById("txtcelular")).value;
    var direccion =(<HTMLInputElement>document.getElementById("txtdireccion")).value;
    if (name==""){
      this.Alert('Por favor Escriba el nombre');
    }else if(foto==""){
      this.Alert(' Por favor la foto');
    }else if(celular==""){
      this.Alert(' Por favor ingrese la foto');
    }else if(direccion==""){
      this.Alert(' Por favor la direccion');
    }else{
      this.modalController.dismiss({  
        nombre: name,
        foto: foto,
        celular: celular,
        direccion: direccion,
    });
    }
  }
  async Alert(msj) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'ALERT!!!',
      message: msj,
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role); 
    
  }
  
}
