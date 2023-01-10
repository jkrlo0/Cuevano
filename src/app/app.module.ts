import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BarraNavegacionComponent } from './barra-navegacion/barra-navegacion.component';
import { MasVistoComponent } from './mas-visto/mas-visto.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraNavegacionComponent,
    MasVistoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
