import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  private clientes = [
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
  constructor() {}

}
