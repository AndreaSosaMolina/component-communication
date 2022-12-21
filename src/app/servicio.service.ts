import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  // variables para mostrar el mensaje en ambos componentes
  textServiceParent: string = ' PARENT USING SERVICE';
  textServiceChild: string = 'CHILD USING SERVICE';

  // variables con $ para declarar que son observables
  messageObservParent$: string = 'PARENT USING SUBJECT';
  messageObservChild$: string = 'CHILD USING SUBJECT';


  // propiedades de tipo observables
  subParent: BehaviorSubject<string> = new BehaviorSubject(this.messageObservParent$);
  subChild: BehaviorSubject<string> = new BehaviorSubject(this.messageObservChild$);

  constructor(){}

  parentMessageService(){
    return this.textServiceParent;
  }

  childMessageService(){
    return this.textServiceChild;
  }

  messageObser(){
    return this.subParent.asObservable()
  }

  messageObserChild(){
    return this.subChild.asObservable();
  }

}
