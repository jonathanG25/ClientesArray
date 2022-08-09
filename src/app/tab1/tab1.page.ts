import { Component, OnInit, ViewChildren } from '@angular/core';
import { ServicioService } from '../servicio.service';
import { Cliente } from '../client.model';
import { Router } from '@angular/router';
import { AlertController, IonList, ModalController } from '@ionic/angular';
import { AddclientPage } from '../addclient/addclient.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  @ViewChildren(IonList) ionlist: IonList;


  public comentarios : any =[
    {
      id:1,
      foto:'https://i.pinimg.com/236x/6d/f7/ce/6df7ce86ad3811d785148d728270226f.jpg',
      nombre: 'Maria',
      celular: '0990813478',
      direccion: 'Pangui',
    }
  ];
  public nuevocomentario= {id:0,foto:'',nombre:'',celular:'',direccion:''};

  constructor(
    public modalController: ModalController,
    public alertController: AlertController ) { }

  ngOnInit() {
  }

  
  eliminar(indice){
    this.Drop(indice);
  }
  async AbrirModal(c){
    console.log(c);
    const modal = await this.modalController.create({
      component: AddclientPage,
      componentProps: {
        'foto': c.foto,
        'nombre': c.nombre,
        'celular': c.celular,
        'direccion': c.direccion
      }
      
    });
    await modal.present();
  
    var {data}=await modal.onWillDismiss();
    if (data!=undefined){
      if(c.id==0){
        data.id=new Date().getTime();
        this.comentarios.push(data);
      }else{
        c.foto=data.foto;
        c.nombre=data.nombre;
        c.celular=data.celular;
        c.direccion=data.direccion;
      }
    }
  }
  async Drop(indice) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'ALERT!!!',
      message: '¿Esta seguro de eliminar el cliente',
      buttons: [
        {
          text: 'CANCELAR',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'ACEPTAR',
          handler: () => {
            this.comentarios.splice(indice, 1);
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
}
