import { Injectable } from '@angular/core';
import { Cliente } from './client.model';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  private clientes: Cliente[] = [
    {
      id: '1',
      foto:'https://www.adslzone.net/app/uploads-adslzone.net/2020/09/Foto-de-perfil-en-WhatsApp.jpg',
      nombre: 'Juan Acaro',
      celular: '0985641230',
      direccion: 'cuenca'
    },
    {
      id: '2',
      foto:'https://i.pinimg.com/474x/e9/4a/d1/e94ad1c7a1fb16b9ce2b15f94ff4764b.jpg',
      nombre: 'Marcela Carrion',
      celular: '0985641231',
      direccion: 'cuenca'
    }
  ]

  constructor() { }

  getClientes(){
    return [...this.clientes]
  }

  getCliente(clienteId: string){
    return{
      ...this.clientes.find(cliente =>{
        return cliente.id === clienteId
      })
    }
  }

  addClient(foto: string ,nombre:string,celular:string,direccion: string){
    this.clientes.push({
      foto,
      nombre,
      celular,
      direccion,
      id : this.clientes.length + 1 + ""
    })
  }
  updateClient(){

  }
  deleteClient(clientId: string){
    this.clientes.filter(cliente =>{
      return cliente.id != clientId
    })

  }

}
