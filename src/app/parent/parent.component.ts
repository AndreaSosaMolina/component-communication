import { Component } from '@angular/core';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {

  // Mensaje para enviar
  messageForChild: string = ''; 

  // Mensaje para recibir
  messageFromChild: string = ''; 


  // utilizando las variables y metodos del servicio
  constructor( private serviceData: ServicioService){

  }

  // metodo para recibir el mensaje desde el hijo
  catchMessage( mensaje: string){
    this.messageFromChild = mensaje;
  }


  // metodo para mostrar el mensaje desde el servicio hasta este componente
  service(){
    this.messageForChild =  this.serviceData.textServiceParent;
  }

  // metodo usando el Input del hijo para mostrar el mensaje
  input(){
    this.messageForChild = 'parent using input property'
  }

  // metodo usando el behaviorsub desde el servicio
  observable(){
    this.serviceData.messageObser().subscribe(text => {this.messageForChild = text});
  }
}
