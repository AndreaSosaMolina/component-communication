import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent  {

  // 'message' es la info que se muestra desde el padre
  @Input() message: string = '';

  // metodo a emitir 
  @Output() messageFromChildren: EventEmitter<string> = new EventEmitter();
  
  
  // utilizando las variables y metodos del servicio
  constructor( private serviceData: ServicioService){}

  serviceMessageChild(): void {
    this.messageFromChildren.emit(this.serviceData.childMessageService());
  }

  output(): void {
    this.messageFromChildren.emit('Child using output event');
  }

  observable(): void {
    this.serviceData.messageObserChild().subscribe(this.messageFromChildren)
  }



}
