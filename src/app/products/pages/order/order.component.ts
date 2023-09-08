import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent {

  public isUpperCase: boolean= false;
  public orderBy: keyof Hero | undefined | '' = '';

  public heroes: Hero[]=[
    {
      name:'Ironman',
      canFly: true,
      color: Color.red,
    },
    {
      name:'Hulk',
      canFly: false,
      color: Color.green,
    },
    {
      name:'Capitan America',
      canFly: false,
      color: Color.blue,
    },
    {
      name:'Black Widow',
      canFly: false,
      color: Color.black,
    },
  ]


  toggleUpperCase():void{

    this.isUpperCase= !this.isUpperCase;
  }

  changeOrder(value: keyof Hero){

    this.orderBy= value;
  }
}
