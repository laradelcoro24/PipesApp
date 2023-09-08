import { Component } from '@angular/core';

@Component({
  selector: 'products-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower:string='lara';
  public nameUpper:string='LARA';
  public fullname: string='LaRa DEl CORo';
  public customDate: Date= new Date(  ); //obtiene la fecha actual

}
