import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  // variables para mostrar el mensaje en ambos componentes
  textServiceParent: string = 'Parent using Service';
  textServiceChild: string = 'Child using Service';

  // variables con $ para declarar que son observables
  messageObservParent$: string = 'Parent using Subject';
  messageObservChild$: string = 'Child using Subject';


  // propiedades de tipo observables
  private subParent: BehaviorSubject<string> = new BehaviorSubject(this.messageObservParent$);
  private subChild: BehaviorSubject<string> = new BehaviorSubject(this.messageObservChild$);

  constructor(){}


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
