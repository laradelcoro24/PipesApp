import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import localEsAR from '@angular/common/locales/es-AR'
import localFrCA from '@angular/common/locales/fr-CA'
import { registerLocaleData } from '@angular/common';

registerLocaleData (localEsAR);
registerLocaleData(localFrCA);
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule

  ],

  providers: [

    {
      provide: LOCALE_ID, useValue:'es-AR' // establesco el idioma por defecto en toda la app
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
