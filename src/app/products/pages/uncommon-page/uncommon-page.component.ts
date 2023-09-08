import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'products-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  //i18Select
  public name: string='Lara';
  public gender: 'male'| 'female'= 'female';

  public invitationMap={
    'male': 'invitarlo',
    'female':'inivtarla',
  }

  changeClient():void{
    this.name='Tomas',
    this.gender='male'

  }

  //i18plural

  public clients:string[]=['lara','gina','marita','tomas','vic','mora','liza',];
  public clientsMap={
    '=0': 'no tenemos clientes esperando',
    '=1': 'tenemos 1 clientes esperando',
    '=2': 'tenemos 2 clientes esperando',
    'other': 'tenemos # clientes esperando',
  }

  deleteClient():void{
    this.clients.pop();
  }

  //jsonPipe
  public person={
    name: 'Lara',
    age:22,
    address:'Rosario, Argentina'
  }
  //AsyncPipe
  public myObservableTimer= interval(2000).pipe(
    tap( value => console.log('tap',value))
  );

public promiseValue: Promise<string>= new Promise((resolve,reject) => {
  setTimeout(()=>{
    resolve('Tenemos data en la promesa');
  },3000);
  })

}
